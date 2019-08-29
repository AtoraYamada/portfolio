<template>
  <div class="content">
    <div class="logo"><b>CO<span>NT</span>AC<span>T</span></b></div>
    <div id="container">
      <p>
        EMAIL<br><a href="https://docs.google.com/forms/d/e/1FAIpQLSdW_TWtBChPmGvxMcMrdd2s366SO9xXFQDkHNXyraGiSJaO5g/viewform?usp=sf_link">atora1992@gmail.com</a><br>
      </p>
      <p>
        Github<br><a href="https://github.com/AtoraYamada" class="link-white">https://github.com/AtoraYamada</a><br>
      </p>
      <p>
        BLOG<br><a href="https://atora1992.hatenablog.com/" class="link-white">https://atora1992.hatenablog.com/</a><br>
      </p>
      <p>
        Twitter<br><a href="https://twitter.com/ATORA1992" class="link-white">@ATORA1992</a>
      </p> 
    </div>
  </div>
</template>

<style scoped>
  .content{
    margin-top: -350px;
    background-image: url("../../assets/contact/brick.jpg")
  }
  @import url(//fonts.googleapis.com/css?family=Vibur);
  .logo {
    text-align: center;
    width: 65%;
    padding-top:  30px;
    margin: auto;
  }

  .logo b{
    font-size: 80px;
    font-family: Vibur;
    color: #fee;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
  }
  .logo b span{
    animation: blink linear infinite 2s;
  }
  @keyframes blink {
    78% {
      color: inherit;
      text-shadow: inherit;
    }
    79%{
      color: #333;
    }
    80% {
      
      text-shadow: none;
    }
    81% {
      color: inherit;
      text-shadow: inherit;
    }
    82% {
      color: #333;
      text-shadow: none;
    }
    83% {
      color: inherit;
      text-shadow: inherit;
    }
    92% {
      color: #333;
      text-shadow: none;
    }
    92.5% {
      color: inherit;
      text-shadow: inherit;
    }
  }

  #container{
    margin: auto;
    padding-bottom: 50px;
  }

  p{
    text-align:center;
    font-size: 30px;
    margin:40px 0 20px 0; 
    font-family: 'Press Start 2P', cursive;    
    line-height: 1.2;
    color: rgba(255, 255, 255, 0.911);
  }
  a{
    font-family: 'Press Start 2P', cursive;
    text-decoration:none; 
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
  }

  @media screen and (max-width: 1280px) {
    .logo b {
      font-size: 80px;
    }
    p {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    .logo b {
      font-size: 60px;
    }
    p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 600px) {
    .logo b {
      font-size: 40px;
    }
    p {
      font-size: 10px;
    }
  }

  p:nth-child(1) a{
    color:#FF1177;
  }
  p:nth-child(1) a:hover{
    -webkit-animation: neon1 1.5s ease-in-out infinite alternate;
    -moz-animation: neon1 1.5s ease-in-out infinite alternate;
    animation: neon1 1.5s ease-in-out infinite alternate; 
  }

  p:nth-child(2) a{
    color:#228DFF;
  }
  p:nth-child(2) a:hover{
    -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
    -moz-animation: neon2 1.5s ease-in-out infinite alternate;
    animation: neon2 1.5s ease-in-out infinite alternate;
  }

  p:nth-child(3) a{
    color:#FFDD1B;
  }
  p:nth-child(3) a:hover{ 
    -webkit-animation: neon3 1.5s ease-in-out infinite alternate;
    -moz-animation: neon3 1.5s ease-in-out infinite alternate;
    animation: neon3 1.5s ease-in-out infinite alternate; 
  }

  p:nth-child(4) a{
    color:#B6FF00;
  }
  p:nth-child(4) a:hover{
    -webkit-animation: neon4 1.5s ease-in-out infinite alternate;
    -moz-animation: neon4 1.5s ease-in-out infinite alternate;
    animation: neon4 1.5s ease-in-out infinite alternate;
  }
  p a:hover{
  color:#ffffff;  
  }

  /*glow for webkit*/
  @-webkit-keyframes neon1 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #FF1177,
                0 0 70px  #FF1177,
                0 0 80px  #FF1177,
                0 0 100px #FF1177,
                0 0 150px #FF1177;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #FF1177,
                0 0 35px #FF1177,
                0 0 40px #FF1177,
                0 0 50px #FF1177,
                0 0 75px #FF1177;
    }
  }

  @-webkit-keyframes neon2 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #228DFF,
                0 0 70px  #228DFF,
                0 0 80px  #228DFF,
                0 0 100px #228DFF,
                0 0 150px #228DFF;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #228DFF,
                0 0 35px #228DFF,
                0 0 40px #228DFF,
                0 0 50px #228DFF,
                0 0 75px #228DFF;
    }
  }

  @-webkit-keyframes neon3 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #FFDD1B,
                0 0 70px  #FFDD1B,
                0 0 80px  #FFDD1B,
                0 0 100px #FFDD1B,
                0 0 150px #FFDD1B;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #FFDD1B,
                0 0 35px #FFDD1B,
                0 0 40px #FFDD1B,
                0 0 50px #FFDD1B,
                0 0 75px #FFDD1B;
    }
  }

  @-webkit-keyframes neon4 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #B6FF00,
                0 0 70px  #B6FF00,
                0 0 80px  #B6FF00,
                0 0 100px #B6FF00,
                0 0 150px #B6FF00;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #B6FF00,
                0 0 35px #B6FF00,
                0 0 40px #B6FF00,
                0 0 50px #B6FF00,
                0 0 75px #B6FF00;
    }
  }

  /*glow for mozilla*/
  @-moz-keyframes neon1 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #FF1177,
                0 0 70px  #FF1177,
                0 0 80px  #FF1177,
                0 0 100px #FF1177,
                0 0 150px #FF1177;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #FF1177,
                0 0 35px #FF1177,
                0 0 40px #FF1177,
                0 0 50px #FF1177,
                0 0 75px #FF1177;
    }
  }

  @-moz-keyframes neon2 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #228DFF,
                0 0 70px  #228DFF,
                0 0 80px  #228DFF,
                0 0 100px #228DFF,
                0 0 150px #228DFF;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #228DFF,
                0 0 35px #228DFF,
                0 0 40px #228DFF,
                0 0 50px #228DFF,
                0 0 75px #228DFF;
    }
  }

  @-moz-keyframes neon3 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #FFDD1B,
                0 0 70px  #FFDD1B,
                0 0 80px  #FFDD1B,
                0 0 100px #FFDD1B,
                0 0 150px #FFDD1B;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #FFDD1B,
                0 0 35px #FFDD1B,
                0 0 40px #FFDD1B,
                0 0 50px #FFDD1B,
                0 0 75px #FFDD1B;
    }
  }

  @-moz-keyframes neon4 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #B6FF00,
                0 0 70px  #B6FF00,
                0 0 80px  #B6FF00,
                0 0 100px #B6FF00,
                0 0 150px #B6FF00;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #B6FF00,
                0 0 35px #B6FF00,
                0 0 40px #B6FF00,
                0 0 50px #B6FF00,
                0 0 75px #B6FF00;
    }
  }

  /*glow*/
  @keyframes neon1 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #FF1177,
                0 0 70px  #FF1177,
                0 0 80px  #FF1177,
                0 0 100px #FF1177,
                0 0 150px #FF1177;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #FF1177,
                0 0 35px #FF1177,
                0 0 40px #FF1177,
                0 0 50px #FF1177,
                0 0 75px #FF1177;
    }
  }

  @keyframes neon2 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #228DFF,
                0 0 70px  #228DFF,
                0 0 80px  #228DFF,
                0 0 100px #228DFF,
                0 0 150px #228DFF;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #228DFF,
                0 0 35px #228DFF,
                0 0 40px #228DFF,
                0 0 50px #228DFF,
                0 0 75px #228DFF;
    }
  }

  @keyframes neon3 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #FFDD1B,
                0 0 70px  #FFDD1B,
                0 0 80px  #FFDD1B,
                0 0 100px #FFDD1B,
                0 0 150px #FFDD1B;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #FFDD1B,
                0 0 35px #FFDD1B,
                0 0 40px #FFDD1B,
                0 0 50px #FFDD1B,
                0 0 75px #FFDD1B;
    }
  }

  @keyframes neon4 {
    from {
      text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
                0 0 40px  #B6FF00,
                0 0 70px  #B6FF00,
                0 0 80px  #B6FF00,
                0 0 100px #B6FF00,
                0 0 150px #B6FF00;
    }
    to {
      text-shadow: 0 0 5px #fff,
                0 0 10px #fff,
                0 0 15px #fff,
                0 0 20px #B6FF00,
                0 0 35px #B6FF00,
                0 0 40px #B6FF00,
                0 0 50px #B6FF00,
                0 0 75px #B6FF00;
    }
  }
</style>
