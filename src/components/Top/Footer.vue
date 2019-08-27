<template>
  <footer>
    <p>
      日本茶と<br>
      プログラミングは<br>
      たがへども<br>
      おくふかきこと<br>
      おなじ所なり
    </p>
  </footer>
</template>

<style scoped>
  footer {
    text-align: left;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 400px;  
    background: #2A2A2A;
    font-size: calc(1.4rem + ((1vw - 0.64rem) * 2.1429));
    color: white; 
    line-height: calc(5.0rem + ((1vw - 0.64rem) * 2.1429));
  }
  footer p{
    margin: 50px auto;
    padding-top: 3%;
    font-family: 'PMingLiU';
    writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
  }
</style>