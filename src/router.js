import Vue from "vue";
import Router from "vue-router";

import Top from "./components/Top/Top.vue";
import TopHeader from "./components/Top/TopHeader.vue";
import TopLink from "./components/Top/TopLink.vue";
import Footer from "./components/Top/Footer.vue";

import Contact from "./components/Contact/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      components: {
        default: Top,
        footer: Footer
      }
    }, {
      path: '/contact',
      components: {
        default: Contact
      }
    }
  ]
})