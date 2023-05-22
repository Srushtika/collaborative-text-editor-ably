<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <AvatarStack /> -->
    <Container />
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
      msg: null
    };
  },
  created() {
    this.btnText = "Creating your watch party...";
    this.isCreatingRoom = true;
    this.isAdmin = true;
    this.instantiateAbly({ username: "Srush", isAdmin: true });
  },
  components: {
    Container
  },
  methods: {
    ...mapActions(["instantiateAbly"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
