import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import AuthHandler from "./components/AuthHandler.vue";
import ImageLIst from "./components/ImageList.vue";
import UploadForm from "./components/UploadForm.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: ImageLIst },
    { path: "/upload", component: UploadForm },
    { path: "/oauth2/callback", component: AuthHandler },
  ],
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
