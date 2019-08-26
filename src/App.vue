<template>
  <div>
    <main>
      <router-view name="header"></router-view>
      <router-view name="link"></router-view>
    </main>
    <footer>
      <p>
        日本茶と<br>
        プログラミングは<br>
        たがへども<br>
        おくふかきこと<br>
        おなじ所なり
      </p>
    </footer>
  </div>
</template>

<style scoped>
  main {
    position: relative;
    z-index: 2;
    margin-bottom: 400px;
    -webkit-box-shadow: #000 0 7px 35px 0;
    -moz-box-shadow: #000 0 7px 35px 0;
    box-shadow: #000 0 7px 35px 0;
  }
  footer {
    text-align: left;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 400px;  
    background: #2A2A2A;
    font-size: calc(2.2rem + ((1vw - 0.64rem) * 2.1429));
    color: white; 
    line-height: calc(5.0rem + ((1vw - 0.64rem) * 2.1429));
  }
  footer p{
    margin: auto;
    padding-top: 2%;
    font-family: 'PMingLiU';
    writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
  }
</style>