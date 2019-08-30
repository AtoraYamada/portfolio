<template>
  <div class="content">
    <div class="lines">
      <div class="glitch" data-text="SKILLS">SKILLS</div> 
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="skills">
        <h1>資格</h1>
        <p>
          ・薫風流煎茶道師範職<br>
          ・日本茶アドバイザー<br>
          ・宅地建物取引士<br>
          ・実用フランス語技能検定3級<br>
          ・普通自動車免許(第一種)<br>
        </p>
      </div>
      <div class="skills">
        <h1 style="margin-bottom: 20px;">プログラミング言語</h1>
        <a href="https://html.spec.whatwg.org/multipage/"><img src="../../assets/skills/html-5.svg" width="20%"></a>
        <a href="http://haml.info/"><img src="../../assets/skills/haml.svg" width="20%"></a>
        <a href="https://www.w3.org/TR/CSS/"><img src="../../assets/skills/css-3.svg" width="20%"></a>
        <a href="https://sass-lang.com/"><img src="../../assets/skills/sass.svg" width="20%" style="margin-bottom: 4%;"></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="../../assets/skills/javascript.svg" width="20%" style="margin-bottom: 2%;"></a>
        <a href="https://jquery.com/"><img src="../../assets/skills/jquery.svg" width="21%" style="background-color: white; margin-bottom: 5%;"></a>
        <a href="https://vuejs.org/"><img src="../../assets/skills/vue.svg" width="20%"></a>
        <a href="https://www.ruby-lang.org/ja/"><img src="../../assets/skills/ruby.svg" width="18%"></a>
        <a href="https://rubyonrails.org/"><img src="../../assets/skills/rails.svg" width="21%" style="margin-bottom: 5%;"></a>
        <a href="https://developer.apple.com/swift/"><img src="../../assets/skills/swift.svg" width="20%"></a>
        <a href="https://github.com/"><img src="../../assets/skills/github-icon.svg" width="20%" style="background-color: white; border-radius: 50%;"></a>
        <a href="https://aws.amazon.com/"><img src="../../assets/skills/aws.svg" width="20%" style="background-color: white; margin-bottom: 3%;"></a>
      </div>
      <div class="skills">
        <h1>WORKS</h1>
        <div class="works-wrapper">
          <div class="work-box">
            <img class="work-image" src="../../assets/skills/chat_space.png" alt="Chat-Space（チャットアプリケーション）">
            <div class="work-description">
              Chat-Space<br>（チャットアプリケーション）<br><br>
              <a href="https://atorayamada.github.io/portfolio/chat_space.html" class="button button-ghost">READ MORE</a>
            </div>
          </div>

          <div class="work-box">
            <img class="work-image" src="../../assets/skills/mercari.png" alt="クローンサイト">
            <div class="work-description">
              クローンサイト<br>（mercari）<br><br>
              <a href="https://atorayamada.github.io/portfolio/mercari.html" class="button button-ghost">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    margin-top: -350px;
    background-color: black;
    height: 100%;
  }
  p {
    color: white;
    z-index: 2;
  }
  .lines {
    position: relative;
    height: 100%;
    margin: auto;
    width: 90vw;
    padding: 100px 0 100px;
  }
  .line {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    &::after {
      content: '';
      display: block;
      position: absolute;
      height: 15vh;
      width: 100%;
      top: -50%;
      left: 0;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
      animation: run 5s 0s infinite;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    }
  }
  .line:nth-child(2){
    margin-left: -40%;
    &::after{
      animation-delay: 1s;
    }
  }
  .line:nth-child(3){
    margin-left: -20%;
    &::after{
      animation-delay: 2.0s;
    }
  }
  .line:nth-child(5){
    margin-left: 20%;
    &::after{
      animation-delay: 1.5s;
    }
  }
  .line:nth-child(6){
    margin-left: 40%;
    &::after{
      animation-delay: 2.5s;
    } 
  }
  @keyframes run{
    0% {
      top: -50%;
    }
    100% {
      top: 110%;
    }
  }

  .glitch{
    color:white;
    font-size:100px;
    position:relative;
    width:30%;
    margin:0 auto;
    &:after{
      content:attr(data-text);
      position:absolute;
      left:2px;
      text-shadow:-1px 0 red;
      top:0;
      color:white;
      background:black;
      overflow:hidden;
      clip:rect(0,900px,0,0); 
      animation:noise-anim 2s infinite linear alternate-reverse;
    }
    &:before{
      content:attr(data-text);
      position:absolute;
      left:-2px;
      text-shadow:1px 0 blue; 
      top:0;
      color:white;
      background:black;
      overflow:hidden;
      clip:rect(0,900px,0,0); 
      animation:noise-anim-2 3s infinite linear alternate-reverse;
    }
  }
  @media screen and (max-width: 1280px) {
    .glitch {
      font-size: 100px;
    }
    h1 {
      font-size: 60px;
    }
    p {
      font-size: 30px;
    }
    .work-description {
      font-size: 13px !important;
    }
  }
  @media screen and (max-width: 1024px) {
    .glitch {
      font-size: 80px;
    }
    h1 {
      font-size: 50px !important;
    }
    p {
      font-size: 20px !important;
    }
    .work-box {
      width: 70% !important;
    }
  }
  @media screen and (max-width: 600px) {
    .glitch {
      font-size: 50px;
      width: 45%;
    }
    h1 {
      font-size: 25px !important;
    }
    p {
      font-size: 15px !important;
    }
    .work-box {
      width: 80% !important;
    }
    .work-description {
      font-size: 10px !important;
    }
  }

  @keyframes noise-anim{
    $steps: 20;
    @for $i from 0 through $steps{
      #{percentage($i*(1/$steps))}{
        clip:rect(random(100)+px,9999px,random(100)+px,0);
      }
    }
  }
  @keyframes noise-anim-2{
    $steps:20;
    @for $i from 0 through $steps{
      #{percentage($i*(1/$steps))}{
        clip:rect(random(100)+px,9999px,random(100)+px,0);
      }
    }
  }
  .skills {
    width: 85%;
    margin: 3rem auto 10rem;
    padding-bottom: 35px;
    border-bottom: solid 2px white;
  }
  h1 {
    color: white;
    text-align: center;
    font-size: 60px;
    border-bottom: double 0.6rem white;
  }
  p {
    display: block;
    padding-top: 5%; 
    font-size: 30px;
  }

  .works-wrapper {
    display: flex;
    width: 80%;
    margin: 60px auto 0;
    justify-content: center;
    -webkit-box-lines:multiple;
    -moz-box-lines:multiple;
    -webkit-flex-wrap:wrap;
    -moz-flex-wrap:wrap;
    -ms-flex-wrap:wrap;
    flex-wrap:wrap;
  }
  .work-box {
    background-color: rgb(50, 50, 50);
    border: 1px solid #333;
    width: 33%;
    margin: 5% 5%;
    z-index: 2;
  }
  .work-image {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  .work-description {
    text-align: center;
    margin: 5% 0;
    font-weight: bold;
    color: white;
    font-size: 13px;
  }
  .work-description .button {
    width: 60%;
    margin-top: 5%;
    padding: 5%;
    color: white;
  }
</style>