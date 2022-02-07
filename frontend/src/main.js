import { createApp } from "vue";
import { Quasar, Loading, LoadingBar, Notify } from "quasar";
// import quasarLang from "quasar/lang/he";
import iconSet from "quasar/icon-set/fontawesome-v6";

import router from "./router";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
// import "@quasar/extras/ionicons-v4/ionicons-v4.css";
// import "@quasar/extras/eva-icons/eva-icons.css";
// import "@quasar/extras/line-awesome/line-awesome.css";

// A few examples for animations from Animate.css:
import "@quasar/extras/animate/fadeIn.css";
import "@quasar/extras/animate/fadeOut.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import "./css/app.scss";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

const myApp = createApp(App).use(router);

myApp.use(Quasar, {
  plugins: {
    LoadingBar,
    Loading,
    Notify
  }, // import Quasar plugins and add here
  // lang: quasarLang,
  iconSet
  /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
});

myApp.mount("#app");
