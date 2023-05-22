<template>
  <div class="bg-white text-left p-2.5 font-ui-sans-serif mx-11" @mousemove="mouseMove">
    <AvatarStack />
    <Cursors />
    <!-- <div class="flex flex-1 flex-row">
      <div class="w-5 flex flex-col justify-center">
        <div class="flex -space-x-2 justify-end">
          <div class="relative inline-flex items-center justify-center w-5 h-5 ring-2 ring-white rounded-full bg-red-600">
            <span class="font-medium text-xs text-white dark:text-white"> TR </span>
          </div>
        </div>
      </div> -->
    <div
      id="header-h1"
      class="text-4xl font-black p-2 hover:bg-gray-100 border border-transparent"
      style="outline: 0px solid transparent"
      contenteditable
      @focus="setBlockLocation($event)"
    >
      👩🏻‍💻 Collaborative block text editor
    </div>
    <!-- </div> -->
    <hr class="h-px my-8 bg-gray-300 border-1 dark:bg-gray-300" />

    <div
      id="header-h2-1"
      class="text-3xl font-bold p-2 hover:bg-gray-100 border border-transparent"
      style="outline: 0px solid transparent"
      contenteditable
      @focus="setBlockLocation($event)"
    >
      Get started
    </div>
    <div id="body-1" class="text-lg p-2 hover:bg-gray-100 border border-transparent" style="outline: 0px solid transparent" contenteditable @focus="setBlockLocation($event)">
      👋 Welcome! This is a demo text editor powered by Ably's Realtime Collaboration SDK. Open another instance of this in a new tab and explore the multiplayer collaboration
      features.
    </div>
    <div id="body-2" class="text-lg p-2 hover:bg-gray-100 border border-transparent" contenteditable style="outline: 0px solid transparent" @focus="setBlockLocation($event)">
      Available features:
      <ul class="list-disc pl-5">
        <li>Avatar Stack</li>
        <li>User in-app location</li>
        <li>Live cursors</li>
        <li>Field locking</li>
        <li>Live app updates</li>
      </ul>
    </div>

    <hr class="h-px my-8 bg-gray-300 border-1 dark:bg-gray-300" />
    <div
      id="header-h2-2"
      class="text-3xl font-bold p-2 hover:bg-gray-100 border border-transparent"
      style="outline: 0px solid transparent"
      contenteditable
      @focus="setBlockLocation($event)"
    >
      TODOs
    </div>
    <div
      id="chk-1"
      class="text-lg pl-2 hover:bg-gray-100 flex items-center border border-transparent"
      contenteditable
      style="outline: 0px solid transparent"
      @focus="setBlockLocation($event)"
    >
      <input
        id="checkbox-1"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        style="outline: 0px solid transparent"
      />
      <label for="checkbox-1" class="ml-2 checkbox-1">Tried the demo</label>
    </div>
    <div
      id="chk-2"
      class="text-lg pl-2 hover:bg-gray-100 flex items-center border border-transparent"
      contenteditable
      style="outline: 0px solid transparent"
      @focus="setBlockLocation($event)"
    >
      <input
        checked
        id="checkbox-2"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        style="outline: 0px solid transparent"
      />
      <label for="checkbox-2" class="ml-2 checkbox-1">Checked out the GitHub repo</label>
    </div>

    <div
      id="chk-3"
      class="text-lg pl-2 hover:bg-gray-100 flex items-center border border-transparent"
      contenteditable
      style="outline: 0px solid transparent"
      @focus="setBlockLocation($event)"
    >
      <input
        id="checkbox-3"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        style="outline: 0px solid transparent"
      />
      <label for="checkbox-3" class="ml-2 checkbox-1">Signed up to Ably</label>
    </div>
  </div>
</template>

<script>
import AvatarStack from "./AvatarStack.vue";
import Cursors from "./Cursors.vue";
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
      }
    };
  },
  computed: {
    ...mapGetters(["getLocationUpdate"])
  },
  watch: {
    getLocationUpdate: function (update) {
      console.log("LOCATION UPDATE - CSS CLASS UPDATE", update);
      const currentElement = document.getElementById(update.currentLocation.divId);
      const oldElement = document.getElementById(update.previousLocation.divId);
      const memberAvatarColour = update.member.profileData.avatarColour;
      const borderColour = this.borderColours[memberAvatarColour];

      //hack until it's fixed in the API
      if (update.currentLocation.divId != update.previousLocation.divId) {
        currentElement.classList.replace("border-transparent", borderColour);
        oldElement.classList.replace(borderColour, "border-transparent");
      } else {
        currentElement.classList.replace("border-transparent", borderColour);
      }
    }
  },
  methods: {
    ...mapActions(["setBlockLocation", "setCursorLocation"]),
    mouseMove(event) {
      // this.setCursorLocation(event.clientX, event.clientY);
    }
  },
  components: {
    AvatarStack,
    Cursors
  }
};
</script>

<style></style>
