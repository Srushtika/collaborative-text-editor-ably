<template>
  <div class="grid grid-cols-5 h-screen">
    <TextEditor class="col-span-3" />
    <CodeSnippet class="col-span-2" />
  </div>
</template>

<script>
import TextEditor from "./editor/TextEditor.vue";
import CodeSnippet from "./infobox/CodeSnippet.vue";

export default {
  name: "Container",
  data() {
    return {};
  },
  components: {
    TextEditor,
    CodeSnippet
  }
};
</script>

<style></style>
