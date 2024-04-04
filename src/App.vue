<script>
import AppMain from "./components/AppMain.vue";
export default {
  name: "App",
  components: {
    AppMain,
  },
};
</script>

<template>
  <h1 class="text-center my-2 text-success">Boolfolio</h1>
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
