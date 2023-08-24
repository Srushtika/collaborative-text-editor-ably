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
    // Create a new space
    const space = await spaces.get('demoSlideshow');

    // Enter a space, publishing an event for other members
    space.enter({
      username: 'Claire Lemons',
      avatar: 'https://slides-internal.com/users/clemons.png',
    });

    // Subscribe to all member events in a space
    space.members.subscribe((memberUpdate) => {
      console.log(memberUpdate);
    });

    // Publish your location based on the UI element selected
    space.locations.set({ blockId: '2'});

    // Subscribe to location events from all members in a space
    space.locations.subscribe('update', (locationUpdate) => {
      console.log(locationUpdate);
    });

    // Subscribe to events published on "mousemove" by all members
    space.cursors.subscribe('update', (cursorUpdate) => {
      console.log(cursorUpdate);
    });

    // Publish a your cursor position on "mousemove" including optional data
    window.addEventListener('mousemove', ({ clientX, clientY }) => {
      space.cursors.set({ position: { x: clientX, y: clientY }, data: { color: 'red' } });
    });
   `;
  }
};
</script>

<style></style>
