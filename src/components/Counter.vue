<template>
    <h2>{{customTitle}}</h2>
    <p >{{ count }}<sup>2</sup> ={{ squareCounter }}</p>
    <p data-testId="counter">{{count}}</p>
    <div>
        <button @click="increase">+</button>
        <button v-on:click="decrease">-</button>
        <!-- <button @click="count = 0">Reset</button> -->
    </div>
</template>

<script>
export default {
    // props:['message', 'start'],
    props:{
        message:String,
        start:{
            type:Number,
            default:100,
            validator:function(value){
                return value >=0
            }
        },
    },
    // name: 'Counter',

    data() {
        return {
            count: this.start,
        };
    },
    methods: {
        getSquareValue() {
            return this.count * this.count;
        },
        increase() {
            this.count = this.count + 1;
        },
        decrease() {
            this.count--;
        },
    },
    computed: {
        //Se guarda el valor en el cache y solo se llama una vez
        squareCounter() {
            return this.count * this.count;
        },
        customTitle(){
            return this.message || 'Aquí va el titulo';
        }
    },
};
</script>

<style>
button {
    background: #64bb87;
    border-radius: 3px;
    border: 1px solid #000;
    margin: 0 5px;
    padding: 5px 10px;
    color: #fff;
    transition: 0.3 ease-in-out;

}
button:hover {
    background: #5AA67b;
    transition: 0.3 ease-in-out;
}
</style>
