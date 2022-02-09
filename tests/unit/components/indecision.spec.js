import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";
describe("Pruebas en el componente Indecision", () => {
    let wrapper = shallowMount(Indecision);
    //Esta pendiente de cualquier metodo o atributo
    let getAnwerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    //Creamos el mock fetch ya que no existe en node solo en el navegador
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve({
                    answer: "yes",
                    forced: false,
                    image: "https://yesno.wtf/assets/yes/2.gif",
                }),
        })
    );
    let clgSpy;
    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, "log");
        getAnwerSpy = jest.spyOn(wrapper.vm, "getAnswer");

        //Limpiar todos los mocks
        jest.clearAllMocks();
    });
    test("Debe de estar igual al snaptshow", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    test("Escribir en el input no debe de disparar nada console.log()", async () => {
        //Con el vm tenemos acceso a todas las instancias y metodos del componente
        const input = wrapper.find("input");
        await input.setValue("Hola mundo");

        expect(clgSpy).toHaveBeenCalledTimes(1);

        //Revisando que nunca se llame getAnswerSpy
        expect(getAnwerSpy).not.toHaveBeenCalled();
    });

    test("Se debe de disparar el getAnswer con el ?", async () => {
        const input = wrapper.find("input");
        await input.setValue("Seré rico?");
        expect(getAnwerSpy).toHaveBeenCalledTimes(1);
    });

    test("Pruebas en getAnwer", async () => {
        await wrapper.vm.getAnswer();
        expect(wrapper.find("img")).toBeTruthy();
        expect(wrapper.vm.answer).toBe("Si!");
    });

    test('Pruebas en getAnwer -Fallo en API', async () => {
        //Hace el error en el fetch
        fetch.mockImplementationOnce(()=>Promise.reject('Api is down'))
        await wrapper.vm.getAnswer();

        expect(wrapper.find("img").exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe("Error en la api!");


        
     })
});
