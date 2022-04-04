/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Jeff",
      city: "Seattle",
    };
  },
  methods: {
    changeName: function () {
      console.log("changing the name to Katie");
      this.name = "Katie";
      console.log(this.name);
    },
  },
};

Vue.createApp(App).mount("#app");
