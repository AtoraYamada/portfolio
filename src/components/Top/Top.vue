<template>
  <main>
    <TopHeader></TopHeader>
    <TopLink></TopLink>
  </main>
</template>

<script>
import TopHeader from "./TopHeader.vue";
import TopLink from "./TopLink.vue";

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
    -webkit-box-shadow: #000 0 7px 35px 0;
    -moz-box-shadow: #000 0 7px 35px 0;
    box-shadow: #000 0 7px 35px 0;
  }
</style>