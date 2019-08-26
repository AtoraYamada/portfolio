import Vue from "vue";
import Router from "vue-router";

import TopHeader from "./components/Top/TopHeader.vue";
import TopLink from "./components/Top/TopLink.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      components: {
      header: TopHeader,
      link: TopLink
    }}
  ]
})