/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
    };
  },
};

Vue.createApp(App).mount("#app");
