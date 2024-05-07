const app = Vue.createApp({
  // these are called as the root components
  // can define data, functions and component template that shows up in the app

  // Templates include html code which could be used as snippets
  // template: "<h2>Template trial</h2>",
  data() {
    return {
      title: "example",
      greeting: "Hello v3 js",
      number: 50,
      visible: false,
    };
  },
  methods: {
    incNumber() {
      console.log("inside inc number");
      this.number++;
    },
    switchChange() {
      var switchElement = document.getElementById("mySwitch");
      if (switchElement.checked) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
  },
});

// add a switch on basis of which we can toggle if the inc number button is visible or not

// This lets the application know that the app variable which we're using in the js is supposed to be mounted in DOM with id of "APP"
// The element which would have all the things defined here in the js, would have id as "APP"
app.mount("#app");
