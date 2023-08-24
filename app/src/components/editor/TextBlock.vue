<template>
  <div>
    <div class="relative">
      <div
        v-if="contentBlock.type == 'div'"
        :id="contentBlock.id"
        class="p-2 hover:bg-gray-100 border border-transparent"
        :class="contentBlock.styling"
        style="outline: 0px solid transparent"
        contenteditable
        @keydown.enter.prevent
        @focus="setBlockLocation($event)"
        @input="onInput"
      >
        {{ contentBlock.content }}
        <ul v-if="contentBlock.listItems" v-for="item in contentBlock.listItems" class="list-disc pl-5">
          <li>{{ item }}</li>
        </ul>
      </div>
      <hr v-if="contentBlock.type == 'hr'" class="h-px my-8 bg-gray-300 border-1 dark:bg-gray-300" />
      <div
        v-if="contentBlock.type == 'checkbox'"
        :id="contentBlock.id"
        class="hover:bg-gray-100 flex items-center border border-transparent"
        :class="contentBlock.styling"
        contenteditable
        @keydown.enter.prevent
        style="outline: 0px solid transparent"
        @focus="setBlockLocation($event)"
        @input="onInput"
      >
        <input
          :id="contentBlock.id + 'box'"
          :checked="contentBlock.isChecked"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          style="outline: 0px solid transparent"
          @click="onChecked"
        />
        <label :for="contentBlock.id + 'box'" class="ml-2 checkbox-1">{{ contentBlock.content }}</label>
      </div>
      <!-- <div id="memberAtLocation" class="absolute top-0 right-0 bg-gray-400" v-if="showLabel">
        <p>Absolute child</p>
      </div> -->
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import * as VanillaCaret from "vanilla-caret-js";

export default {
  name: "TextBlock",
  props: ["contentBlock"],
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
      showLabel: false
    };
  },
  computed: {
    ...mapGetters(["getLocationUpdate"])
  },
  watch: {
    getLocationUpdate: function (update) {
      if (update.currentLocation) {
        const currentElement = document.getElementById(update.currentLocation.blockId);
        const oldElement = document.getElementById(update.previousLocation.blockId);
        const memberAvatarColour = update.member.profileData.avatarColour;
        const borderColour = this.borderColours[memberAvatarColour];

        //hack until it's fixed in the API
        if (update.currentLocation.blockId != update.previousLocation.blockId) {
          if (currentElement) currentElement.classList.replace("border-transparent", borderColour);
          if (oldElement) oldElement.classList.replace(borderColour, "border-transparent");
        } else {
          currentElement.classList.replace("border-transparent", borderColour);
        }
        this.showLabel = true;
      }
    }
  },
  methods: {
    ...mapActions(["setBlockLocation", "updateTextContentGlobally"]),
    onInput(event) {
      const caret = new VanillaCaret(document.getElementById(this.contentBlock.id));
      const pos = caret.getPos();
      const childElement = event.srcElement.childNodes[event.srcElement.childNodes.length - 1];
      if (childElement && childElement.nodeName == "UL") {
        const htmlColl = document.getElementById(event.target.id).getElementsByTagName("li");
        const text = [...htmlColl].map((item) => item.innerText);
        this.updateTextContentGlobally({ blockId: event.target.id, text: text, type: "list", caretPos: pos });
      } else {
        this.updateTextContentGlobally({ blockId: event.target.id, text: event.target.innerText, type: "div", caretPos: pos });
      }
    },
    onChecked() {
      const chkBoxElement = document.getElementById(this.contentBlock.id + "box");
      this.updateTextContentGlobally({ blockId: this.contentBlock.id, type: "checkbox", isChecked: chkBoxElement.checked });
    }
  },
  components: {},
  created() {
    console.log("COMPONENT CREATED");
  },
  updated() {
    const caret = new VanillaCaret(document.getElementById(this.contentBlock.id));
    caret.setPos(this.contentBlock.caretPos);
  }
};
</script>
