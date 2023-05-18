<template>
  <div class="bg-white text-left p-2.5 font-ui-sans-serif mx-11">
    <AvatarStack />
    <div id="header-h1" class="text-4xl font-black p-2 hover:bg-gray-100 border-none" style="outline: 0px solid transparent" contenteditable>
      👩🏻‍💻 Collaborative block text editor
    </div>
    <hr class="h-px my-8 bg-gray-300 border-1 dark:bg-gray-300" />
    <div id="header-h2-1" class="text-3xl font-bold p-2 hover:bg-gray-100 border-none" style="outline: 0px solid transparent" contenteditable>Get started</div>
    <div id="body-1" class="text-lg p-2 hover:bg-gray-100 border-none" style="outline: 0px solid transparent" contenteditable>
      👋 Welcome! This is a demo text editor powered by Ably's Realtime Collaboration SDK. Open another instance of this in a new tab and explore the multiplayer collaboration
      features.
    </div>
    <div id="body-2" class="text-lg p-2 hover:bg-gray-100" contenteditable style="outline: 0px solid transparent">
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
    <div id="header-h2-2" class="text-3xl font-bold p-2 hover:bg-gray-100 border-none" style="outline: 0px solid transparent" contenteditable>TODOs</div>
    <div id="checkbox-1" class="text-lg pl-2 hover:bg-gray-100 flex items-center" contenteditable style="outline: 0px solid transparent">
      <input
        id="chk-1"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        style="outline: 0px solid transparent"
      />
      <label for="checkbox-1" class="ml-2 checkbox-1">Tried the demo</label>
    </div>
    <div id="chk-2" class="text-lg pl-2 hover:bg-gray-100 flex items-center" contenteditable style="outline: 0px solid transparent">
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

    <div id="chk-3" class="text-lg pl-2 hover:bg-gray-100 flex items-center" contenteditable style="outline: 0px solid transparent">
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

export default {
  name: "TextEditor",
  data() {
    return {};
  },
  components: {
    AvatarStack
  }
};
</script>

<style></style>
