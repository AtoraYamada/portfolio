<template>
  <div>
    <main>
      <TopHeader></TopHeader>
      <TopLink></TopLink>
    </main>
    <router-view name="content"></router-view>
    <p><router-link to="/">TOP PAGE</router-link></p>
  </div>
</template>

<script>
import TopHeader from "./components/Top/TopHeader.vue";
import TopLink from "./components/Top/TopLink.vue";

export default {
  components: {
    TopHeader,
    TopLink
  }
}
</script>

<style scoped>
  main {
    position: relative;
    z-index: 2;
    margin-bottom: 350px;
    /* -webkit-box-shadow: #000 0 7px 35px 0;
    -moz-box-shadow: #000 0 7px 35px 0;
    box-shadow: #000 0 7px 35px 0; */
  }
  p {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 77%;
    z-index: 3;
    font-weight: bold;
  }
  p a {
    background: rgb(219, 7, 7);
    text-decoration: none;
    color: white;
    width: 80px;
    padding: 30px 0;
    text-align: center;
    display: block;
    border-radius: 5px;
  }
  p a:hover {
    text-decoration: none;
    background: rgb(219, 53, 53);
  }
</style>
