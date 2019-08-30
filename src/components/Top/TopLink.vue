<template>
  <div class="my_container">
    <ul>
      <router-link to="/profile">
        <li class="block">
          <img src="../../assets/topLinks/profile.jpg">
          <span class="odd">Profile</span>
        </li>
      </router-link> 
      <router-link to="/favorites">
        <li class="block">
          <img src="../../assets/topLinks/favorites.jpg">
          <span>Favorites</span>
        </li>
      </router-link>
      <router-link to="/skills">
        <li class="block">
          <img src="../../assets/topLinks/skills.jpg">
          <span class="odd">Skills</span>
        </li>
      </router-link>
      <router-link to="/contact">
        <li class="block">
          <img src="../../assets/topLinks/contact.jpg">
          <span>Contact</span>
        </li>
      </router-link>
    </ul> 
  </div>
</template>

<style scoped>
  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .my_container{
    overflow: auto;
  }
  a:nth-child(odd) li{
    background-color: black;
  }
  .my_container ul {
    list-style: none;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    clear: both;
  }
  .my_container ul .block {
    width: 25%;
    height: auto;
    position: relative;
    float: left;
    margin: 0 0 0 0;
    padding: 0 0 25% 0;
    transition: 0.8s ease;
  }
  .my_container ul .block:hover span {
    height: 50%;
  }
  @media screen and (max-width: 1280px) {
    .my_container ul .block {
      width: 25%;
      padding-bottom: 25%;
    }
  }
  @media screen and (max-width: 1024px) {
    .my_container ul .block {
      width: 50%;
      padding-bottom: 50%;
    }
  }
  @media screen and (max-width: 600px) {
    .my_container ul .block {
      width: 50%;
      padding-bottom: 50%;
    }
  }
  @media screen and (max-width: 360px) {
    .my_container ul .block {
      width: 100%;
      padding-bottom: 100%;
    }
  }
  .my_container ul .block img {
    max-width: none;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .my_container ul .block span {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 1rem;
    font-size: 1.3rem;
    color: #fff;
    background: rgba(0,0,0,0.7);
    transition: 0.8s ease;
  }

  .odd{
    background: rgba(255,255,255,0.7) !important;
    color: black !important;
  }
</style>