import { createRouter, createWebHistory } from 'vue-router'

const Footer = () => import('./components/Top/Footer.vue')
const Profile = () => import('./components/Profile/Profile.vue')
const Favorites = () => import('./components/Favorites/Favorites.vue')
const Skills = () => import('./components/Skills/Skills.vue')
const ChatSpace = () => import('./components/Skills/ChatSpace.vue')
const Mercari = () => import('./components/Skills/Mercari.vue')
const Contact = () => import('./components/Contact/Contact.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        content: Footer
      }
    },
    {
      path: '/profile',
      components: {
        content: Profile
      }
    },
    {
      path: '/favorites',
      components: {
        content: Favorites
      }
    },
    {
      path: '/contact',
      components: {
        content: Contact
      }
    },
    {
      path: '/skills',
      components: {
        content: Skills
      },
      children: [
        {
          path: 'chat-space',
          component: ChatSpace
        },
        {
          path: 'mercari',
          component: Mercari
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router