<template>
  <div class="content">
    <div class="title">
      <span class="letter" data-letter="P">P</span>
      <span class="letter" data-letter="R">R</span>
      <span class="letter" data-letter="O">O</span>
      <span class="letter" data-letter="F">F</span>
      <span class="letter" data-letter="I">I</span>
      <span class="letter" data-letter="L">L</span>
      <span class="letter" data-letter="E">E</span>
    </div>
    <div class="foo" data-delighter>
      <p>
        現在：フリーランス<br>
        煎茶道師範職（日本茶アドバイザー）<br>
        Webエンジニア
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        1992年生まれ<br>
        山田亜虎<br>
        (ヤマダアトラ)
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        小〜高校1年生<br>
        自分のからに閉じこもる。<br>
        うまく自分を表現できなかった。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        高校2年生<br>
        オーストラリアにホームステイ。<br>
        ある友達との出会い。<br>
        これらから、自分を出せるようになる。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        『天使と悪魔』という映画を見て素粒子物理学に興味をもち、映画に登場した研究機関（CERN）に行くために「東京大学理学部物理学科」を目指す。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        大学受験で1年間浪人生活<br>
        塾の机が狭いのがいやだったので、塾には通わず自宅で学習。自分の弱点を確認し、自ら計画を立てて勉強。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        東京大学理科一類入学<br>
        煎茶道と出会う。<br>
        （Favorites参照）
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        勉強とともに、煎茶道の道を歩みつつ、理学部物理学科に進学。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        進学後、モノを考えている自己の所在に興味をもち、生物物理学の中でも「脳科学」を勉強し始める。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        卒業研究ではショウジョウバエの幼虫を用いて、神経回路の実験を行う。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        東京大学大学院<br>
        理学系研究科物理学専攻入学<br>
        卒業時とは違う研究室に進み、言語に関する人の脳機能を研究。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        言語学という新たな分野も学びつつ、MRIを用いて人を被験者として実験を行う。<br>
        実験のやり直しが効かないため、本実験まで約1年半、思考実験とテスト実験を繰り返した。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        修士課程卒業後、大手総合デベロッパーに就職。オフィス営業の進捗管理やオフィスワーカー向けのイベント運営を行う。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        会社での研修や部署で聞いた話から、自らのスキルを活かしきれていない人々の存在を知り、個々人のスキルを存分に活かせる世界・ステージが理想だと考えるようになる。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        スキルを活かしきれていない人を支援するにもまずは、自分がスキルを活かした自立した生き方をしなければと思う。<br>現状の世界と理想との隔たりを感じるべく、自分を実験台にして、スキルを活かした働き方「フリーランス」になることを決意。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        今後の世界を生きてゆくためにもプログラミングは必須だと思い、プログラミングスクールに通い、10週間毎日ほぼ10時間勉強しエンジニアの道へ。
      </p>
    </div>
    <div class="foo" data-delighter>
      <p>
        将来、自分のような未経験からの挑戦者を支援するために、挑戦者がスタートをきるために何が必要なのかを今まさに、自分を実験台にしつつ日々体感している。
      </p>
    </div>
  </div>
</template>

<script>
import Delighters from "../../delighters";
export default {
  data(){
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  @-webkit-keyframes animation {
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
  }
  @-moz-keyframes animation {
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
  }
  @keyframes animation { 
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
  }
  @import url(https://fonts.googleapis.com/css?family=Lato:900);

  .letter{
    font-family: 'Lato', sans-serif;
    display: inline-block;
    position: relative;
    color: #634030;
    transform-style: preserve-3d;
    perspective: 400;
    z-index: 1;
  }
  .letter:before, .letter:after{
    position:absolute;
    content: attr(data-letter);
    transform-origin: top left;
    top:0;
    left:0;
  }
  .letter, .letter:before, .letter:after{
    transition: all 0.3s ease-in-out;
  }
  .letter:before{
    color: #fff;
    text-shadow: 
      -1px 0px 1px rgba(255,255,255,.8),
      1px 0px 1px rgba(0,0,0,.8);
    z-index: 3;
    transform:
      rotateX(0deg)
      rotateY(-15deg)
      rotateZ(0deg);
  }
  .letter:after{
    color: rgba(0,0,0,.11);
    z-index:2;
    transform:
      scale(1.08,1)
      rotateX(0deg)
      rotateY(0deg)
      rotateZ(0deg)
      skew(0deg,1deg);
  }
  .letter:hover:before{
    color: #fafafa;
    transform:
      rotateX(0deg)
      rotateY(-40deg)
      rotateZ(0deg);
  }
  .letter:hover:after{
    transform:
      scale(1.08,1)
      rotateX(0deg)
      rotateY(40deg)
      rotateZ(0deg)
      skew(0deg,22deg);
  }
  .title{
    text-align: center;
    width: 65%;
    padding-top: 30px;
    margin: auto;
    font-size: calc(4.0rem + ((1vw - 0.64rem) * 2.1429));
  }
  .content{
    margin-top: -350px;
    padding-bottom: 100px;
    background-image: url("../../assets/profile/back.jpg");
    background-size: 100% 100%;
  }
  .foo{
    color: white;
    padding: 10px 10%;
    width: 50%;
    margin-top: 100px;
    margin-left: 25%;
    border-radius: 90% 0 90% 0;
    -webkit-border-radius: 90% 0 90% 0;
    -moz-border-radius: 90% 0 90% 0;
    background: linear-gradient(231deg, #02983b, #e2451e);
    background-size: 400% 400%;
    -webkit-animation: animation 20s ease infinite;
    -moz-animation: animation 20s ease infinite;
    animation: animation 20s ease infinite;
    font-size: 25px;
  }
  @media screen and (max-width: 1280px) {
    .foo {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 1024px) {
    .foo {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 600px) {
    .foo {
      font-size: 10px;
    }
    .foo p {
      width: 80% !important;
    }
  }
  .foo p{
    margin: auto;
    width: 70%;
    padding: 10% 0 5%;
  }
  .foo.delighter {
      transition: all .8s ease-out;
      transform: translate(-100%);
      opacity: 0;
   }
   .foo.delighter.started {
      transform: none;
      opacity: 1;
   }
  </style>