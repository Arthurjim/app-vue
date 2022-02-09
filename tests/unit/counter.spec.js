import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

//ShalllowMount -> Se genera de manera más simple
//mount -> Se genera con todos los elementos
describe("Counter component", () => {
    // test('Debe hacer el match con el snapshot', () => {
    //   const wrapper = shallowMount(<Counter/>)
    //   expect(wrapper).toMatchSnapshot()
    //   // expect(value).toBeGreaterThan(10)

    // });

    let wrapper = shallowMount(Counter);

    //limpia el wrapper0
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    })
    test("Debe tener el titlo correcto", () => {
        expect(wrapper.find("h2").text().trim()).toBe("Aquí va el titulo");
    });
    test('Debe incrementar y decerementar el contador', async () => {
        //Esperando a que todo el DOm se actualice
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        await increaseBtn.trigger("click");
        await increaseBtn.trigger("click");
        await increaseBtn.trigger("click");
        await increaseBtn.trigger("click");
        await increaseBtn.trigger("click");


        await decreaseBtn.trigger("click");
        await decreaseBtn.trigger("click");

        expect(wrapper.find('[data-testid="counter"]').text().trim()).toBe("103");
    })
    test('El valor por defecto dene de ser 100 en el segundo p', () => { 

        // console.log(wrapper.findAll("p").at(1).text())

        //  expect(wrapper.findAll("p").at(1).text().trim()).toBe("100");

        expect(wrapper.find('[data-testid="counter"]').text().trim()).toBe("100");
     });

     test('Debe de establecer el valor por defecto', () => {

        // console.log(wrapper.props())
        const {start} = wrapper.props();

        const value = wrapper.find('[data-testid="counter"]').text().trim();

        expect(Number(value)).toBe(start);
     })
     test('Debe de mostrar la prop message', () => {

        const message = "Hola mundo";
         const wrapper = shallowMount(Counter,{
             props:{
                message
             }
         })
         expect(wrapper.find('h2').text().trim()).toBe(message);

      })

    
});
