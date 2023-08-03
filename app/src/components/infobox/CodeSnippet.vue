<template>
  <div class="text-left bg-gray-800 flex flex-col">
    <!-- <div style="background-color: #2d2d2d" class="text-left"></div> -->
    <Header class="mx-auto"></Header>
    <VueCodeHighlight language="javascript" class="code-sample"> {{ codeSnippet }} </VueCodeHighlight>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";
import Header from "./Header.vue";
import "vue-code-highlight/themes/duotone-sea.css";

export default {
  name: "CodeSnippet",
  data() {
    return {
      codeSnippet: null
    };
  },
  components: {
    VueCodeHighlight,
    Header
  },
  created() {
    this.codeSnippet = `
      const space = spaces.get("usage-doc");
      await space.enter();
   `;
  }
};
</script>

<style></style>
