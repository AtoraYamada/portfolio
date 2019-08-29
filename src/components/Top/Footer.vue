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
    font-size: 30px;
    color: white; 
    line-height: 80px;
  }
  @media screen and (max-width: 1280px) {
    footer {
      font-size: 30px;
      line-height: 80px;
    }
  }
  @media screen and (max-width: 1024px) {
    footer {
      font-size: 30px;
      line-height: 80px;
    }
  }
  @media screen and (max-width: 600px) {
    footer {
      font-size: 20px;
      line-height: 50px;
    }
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