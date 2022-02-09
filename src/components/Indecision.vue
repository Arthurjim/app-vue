<template>
    <img v-if="img" v-bind:src="img" alt="bg" />
    <div class="bg-dark"></div>
    <div class="indecision-container">
        <input
            type="text"
            v-model="question"
            placeholder="Hazme una pregunta"
        />
        <p>Recuerda terminar con un signo de interrogación (?)</p>
        <div v-if="isValidateQuestion">
            <h2>{{question}}</h2>
            <h1>{{answer}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: "",
            answer:null,
            img:null,
            isValidateQuestion:false
        };
    },
    methods:{
       async getAnswer(){
         
           this.answer = "Pensando..."
            try {
            const {answer,image} =  await fetch('https://yesno.wtf/api')
            .then(res=> res.json())
                this.answer = answer === 'yes' ? 'Si!' : 'No!'
                this.img = image
            } catch (error) {
                console.log('Error')
                this.answer = 'Error en la api!'                
            }
        }
    },
    //Es para estar obsverando/pendiente a cambios
    watch:{
        question(value,oldValue){
            this.isValidateQuestion = false

            console.log({value})

            if(!value.includes('?'))return

            this.isValidateQuestion = true

            this.getAnswer()
            //TODO: Realizar la peticion http
        }
    }
};
</script>
<style scoped>
img,
.bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
}

.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
    position: relative;
    z-index: 99;
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}
input:focus {
    outline: none;
}

p {
    color: rgb(214, 214, 214);
    font-size: 20px;
    margin-top: 0px;
}

h1,
h2 {
    color: white;
}

h2 {
    margin-top: 150px;
}
</style>
