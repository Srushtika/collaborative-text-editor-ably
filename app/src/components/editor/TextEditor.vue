<template>
  <div class="bg-white text-left p-2.5 font-ui-sans-serif mx-11" @mousemove="mouseMove">
    <p>{{ allCursorsArr }}</p>
    <!-- <Cursors v-for="clientCursor in allCursorsArr" :key="clientCursor.clientId" :clientCursor="clientCursor" /> -->

    <AvatarStack />

    <TextBlock v-for="contentBlock in getTextEditorContentBlocks" :key="contentBlock.id" :contentBlock="contentBlock" />
  </div>
</template>

<script>
import AvatarStack from "./AvatarStack.vue";
import Cursors from "./Cursors.vue";
import TextBlock from "./TextBlock.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "TextEditor",
  data() {
    return {
      locationUpdate: null,
      borderColours: {
        red: "border-red-400",
        orange: "border-orange-400",
        green: "border-green-400",
        amber: "border-amber-400",
        lime: "border-lime-400",
        cyan: "border-cyan-400",
        blue: "border-blue-400",
        indigo: "border-indigo-400"
      },
      allCursorsArr: []
    };
  },
  computed: {
    ...mapGetters(["getTextEditorContentBlocks", "getMyCursors"])
  },
  watch: {
    getMyCursors: function (update) {
      console.log("WE ARE HERE", update);
    }
  },
  methods: {
    ...mapActions(["setBlockLocation", "setCursorLocation"]),
    mouseMove(event) {
      this.setCursorLocation({ x: event.clientX, y: event.clientY });
    }
  },
  components: {
    AvatarStack,
    Cursors,
    TextBlock
  },
  updated() {
    console.log("PARENT UPDATED");
  }
};
</script>

<style></style>
