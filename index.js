/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Jeff",
      city: "Seattle",
      thing: null,
      instrument: "",
    };
  },
  methods: {
    doThis: function () {
      console.log("doing at thing...");
      this.thing = "doing the thing here...";
    },
    removeTheThing: function () {
      console.log("getting ride of the thing...");
      this.thing = null;
    },
    changeNameKatie: function () {
      console.log("changing the name to Katie");
      this.name = "Katie";
      console.log(this.name);
    },
    changeNameJeff: function () {
      console.log("chaning the name to Jeff");
      this.name = "Jeff";
      console.log(this.name);
    },
  },
};

Vue.createApp(App).mount("#app");
