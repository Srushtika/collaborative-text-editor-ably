<template>
  <div id="app">
    <p>yooo</p>
    <p>{{ msg }}</p>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
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
  computed: {
    ...mapGetters(["getCollabMembers"])
  },
  watch: {
    getCollabMembers: function (msg) {
      console.log("RECEIVED MESSAGE IN COMPONENT", msg);
      this.msg = msg;
    }
  },
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
