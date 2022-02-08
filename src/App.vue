<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Indecision />
</template>

<script>
import Indecision from "./components/Indecision.vue";
export default {
    name: "App",
    components: {
        Indecision,
    },
};
</script>

<style>
#app {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin-top: 60px;
    text-align: center;
}
</style>
