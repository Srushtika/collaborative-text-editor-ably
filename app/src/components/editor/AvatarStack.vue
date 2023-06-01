<template>
  <div class="m-5 font-sans">
    <div class="flex -space-x-2 justify-end">
      <div
        v-for="member in collabMembersArr"
        :key="member.clientId"
        class="relative inline-flex items-center justify-center w-10 h-10 ring-2 ring-white rounded-full"
        :class="member.isConnected ? bgColours[member.profileData.avatarColour] : 'bg-gray-500'"
      >
        <span class="font-medium text-white dark:text-white">{{ member.profileData.initials }}</span>
        <span v-if="member.isConnected" class="bottom-0 right-7 absolute w-2 h-2 bg-green-600 ring-2 ring-white dark:border-gray-800 rounded-full"></span>
      </div>
      <!-- <a
        class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-500 z-10 border-2 border-white rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:border-gray-600"
        href="#"
        >+6</a
      > -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "AvatarStack",
  data() {
    return {
      collabMembersArr: [],
      bgColours: {
        red: "bg-red-400",
        orange: "bg-orange-400",
        green: "bg-green-400",
        amber: "bg-amber-400",
        lime: "bg-lime-400",
        cyan: "bg-cyan-400",
        blue: "bg-blue-400",
        indigo: "bg-indigo-400"
      }
    };
  },
  computed: {
    ...mapGetters(["getCollabMembers"])
  },
  watch: {
    getCollabMembers: function (arr) {
      this.collabMembersArr = arr;
    }
  }
};
</script>
