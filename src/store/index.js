import Vue from "vue";
import Vuex from "vuex";
import * as Ably from "ably/promises";
import Spaces from "@ably-labs/spaces";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ablyClient: null,
    spaceClient: null,
    myClientId: null,
    collabSpace: null,
    allAvatarColours: ["red", "orange", "green", "amber", "lime", "cyan", "blue", "indigo", "fuschsia"],
    collabMembers: [],
    collabLength: 0
  },
  getters: {
    getAblyClient: (state) => state.ablyClient,
    getSpaceClient: (state) => state.spaceClient,
    getMyClientId: (state) => state.myClientId,
    getCollabSpace: (state) => state.collabSpace,
    getCollabMembers: (state) => state.collabMembers,
    getCollabLength: (state) => state.collabLength
  },

  mutations: {
    setAblyClient(state, client) {
      state.ablyClient = client;
    },
    setSpaceClient(state, client) {
      state.spaceClient = client;
    },
    setCollabSpace(state, space) {
      state.collabSpace = space;
    },
    setMyClientId(state, id) {
      state.myClientId = id;
    }
  },
  actions: {
    instantiateAbly(context) {
      context.dispatch("generateMyClientId");
      const ablyClient = new Ably.Realtime({
        key: "",
        clientId: context.state.myClientId
      });
      const spaceClient = new Spaces(ablyClient);
      const collabSpace = spaceClient.get("text-editor");
      context.commit("setAblyClient", ablyClient);
      context.commit("setSpaceClient", spaceClient);
      context.commit("setCollabSpace", collabSpace);
      context.state.collabSpace.enter({
        username: context.state.myClientId,
        initials: context.state.myClientId.slice(-2).toUpperCase(),
        avatarColour: context.state.allAvatarColours[Math.floor(Math.random() * context.state.allAvatarColours.length)]
      });
      context.dispatch("subscribeToMembers");
    },
    generateMyClientId(context) {
      console.log("abc");
      context.commit("setMyClientId", Math.random().toString(36).substring(2, 16));
    },
    subscribeToMembers(context) {
      context.state.collabSpace.on("membersUpdate", (members) => {
        console.log("member update", members);
        context.state.collabMembers = members;
        console.log("All users are", context.state.collabMembers.length);
        // console.log("total user count", context.state.collabMembers.length);
      });
    }
  }
});
