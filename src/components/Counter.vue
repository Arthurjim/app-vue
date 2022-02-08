<template>
  <h2>Counter!</h2>
  <p>{{count}}<sup>2</sup> ={{squareCounter}} </p>
  <!-- <p>{{count}}<sup>2</sup> ={{squareCounter}} </p>
  <p>{{count}}<sup>2</sup> ={{squareCounter}} </p>
  <p>{{count}}<sup>2</sup> ={{squareCounter}} </p>
  <p>{{count}}<sup>2</sup> ={{squareCounter}} </p> -->
</template>



<script>
export default {
    // name: 'Counter',

    data(){
        return{
            count:5,
        }  
    },
    methods:{
       getSquareValue(){
           return this.count * this.count;
       }
    },
    computed:{
        //Se guarda el valor en el cache y solo se llama una vez
        squareCounter(){
            return this.count * this.count;
        }
    }
}
</script>

<style>

</style>