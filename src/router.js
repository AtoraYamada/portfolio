import Vue from "vue";
import Router from "vue-router";

import Footer from "./components/Top/Footer.vue";
import Profile from "./components/Profile/Profile.vue";
import Contact from "./components/Contact/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      components: {
        content: Footer
      }
    }, {
      path: '/profile',
      components: {
        content: Profile
      }
    }, {
      path: '/contact',
      components: {
        content: Contact
      }
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})