import Vue from "vue";
import Router from "vue-router";

// import Footer from "./components/Top/Footer.vue";
// import Profile from "./components/Profile/Profile.vue";
// import Favorites from "./components/Favorites/Favorites.vue";
// import Contact from "./components/Contact/Contact.vue";

const Footer = () => import ("./components/Top/Footer.vue"); 
const Profile = () => import ("./components/Profile/Profile.vue"); 
const Favorites = () => import ("./components/Favorites/Favorites.vue"); 
const Skills = () => import ("./components/Skills/Skills.vue"); 
const Contact = () => import ("./components/Contact/Contact.vue"); 

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
      path: '/favorites',
      components: {
        content: Favorites
      }
    }, {
      path: '/contact',
      components: {
        content: Contact
      }
    }, {
      path: '/skills',
      components: {
        content: Skills
      }
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})