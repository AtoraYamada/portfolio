<template>
  <div>
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>  
    </div>

    <div class="text-box">
      <span class="text">Atora Yamada</span>
      <span class="text">Portfolio</span>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Bangers');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #e3e3e3;
  }

  .container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);  
    grid-auto-rows: 1fr;
    grid-gap: 1em;
    max-width: 1440px;
    margin: 0 auto;
    background-color: white;
  }

  .item{
    display: inline-block;
    min-height: 400px;
    width: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  /*** Images With Color Fallbacks ***/
  .item:nth-child(1){
    background-color: #e74c3c;
    background-image: url("../../assets/topHeader/1.jpg");
    background-position: center top;
    background-size: cover;
  }

  .item:nth-child(2){
    background-color: #3498db;
    background-image: url("../../assets/topHeader/2.jpg");
    background-position: center 35%; 
    background-size: cover;
  }

  .item:nth-child(3){
    background-color: #bdc3c7;
    background-image: url("../../assets/topHeader/3.jpg");
    background-size: cover;
  }

  .item:nth-child(4){
    background-color: #2c3e50;
    background-image: url("../../assets/topHeader/4.jpg");
    background-size: cover;
    background-position: top 40% left 70%;
  } 

  .item:nth-child(5){
    background-color: #2c3e50;
    background-image: url("../../assets/topHeader/5.jpg");
    background-position: center 5%;
    background-size: cover;
  } 

  .item:nth-child(6){
    background-color: #27ae60;
    background-image: url("../../assets/topHeader/6.jpg");
    background-position: 50% 25%;
    background-size: cover;
  } 

  .item:nth-child(7){
    background-color: #f1c40f;
    background-image: url("../../assets/topHeader/7.jpg");
    background-position: top 40% left 50%;
    background-size: cover;
  } 

  .item:nth-child(8){
    background-color: white;
    background-image: url("../../assets/topHeader/8.jpg");
    background-position: top 30% left 70%;
    background-size: cover;
  } 

/*** Grid Set Up ***/
@supports (display:grid){
  .item{
    width: auto;
    min-height: 0;
  }
  
  .item:nth-child(1){
    grid-column: 1 / span 1;
    grid-row: 1 / 20;  
    -webkit-clip-path: polygon(0 0, 80% 0, 100% 76.5%, 0 100%);
    clip-path: polygon(0 0, 80% 0, 100% 76.5%, 0 100%);
    margin-bottom: -93px;
  }

  .item:nth-child(2){
    grid-column: 2 / span 1;
    grid-row: 1 / 20;  
    -webkit-clip-path: polygon(0 0, 100% 0, 75% 80%, 15.5% 100%);
    clip-path: polygon(0 0, 100% 0, 75% 80%, 15.5% 100%);
    margin-left: -21%;
    margin-right: -5%;
  }

  .item:nth-child(3){
    grid-column: 3 / span 1;
    grid-row: 1 / 20; 
    -webkit-clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 53%);
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 53%);
    margin-left: -28%;
    margin-bottom: -150px;
  }

  .item:nth-child(4){
    grid-column: 1 / span 1;
    grid-row: 20 / 40; 
    -webkit-clip-path: polygon(0 22.5%, 100% 0, 100% 77.5%, 0 100%);
    clip-path: polygon(0 22.5%, 100% 0, 100% 77.5%, 0 100%);
    margin-top: -5px;
    margin-bottom: -93px;    
  } 

  .item:nth-child(5){
    grid-column: 2 / span 1;
    grid-row: 20 / 40;
    -webkit-clip-path: polygon(0 13%, 74% 0, 100% 9.25%, 100% 100%, 0 100%);
    clip-path: polygon(0 13%, 74% 0, 100% 9.25%, 100% 82%, 65% 100%,0 82%);
    margin-top: -67px;
    margin-left: -1%;
    margin-bottom: -86px;
  } 

  .item:nth-child(6){
    grid-column: 3 / span 1;
    grid-row: 20 / 40;
    -webkit-clip-path: polygon(0 0, 100% 34.5%, 100% 100%, 0 68.5%) ;
    clip-path: polygon(0 0, 100% 34.5%, 100% 100%, 0 68.5%);
    margin-left: -1%;
    margin-top: -20px;
    margin-bottom: -150px;
  } 

  .item:nth-child(7){
    grid-column: 1 / 3;
    grid-row: 40 / 60; 
    -webkit-clip-path: polygon(0 30%, 49% 0, 75% 38%, 34% 100%, 0 100%);
    clip-path: polygon(0 30%, 49% 0, 82% 27%, 34% 100%, 0 100%);
    margin-top: -7px;
  } 

  .item:nth-child(8){
    grid-column: 2 / span 2;
    grid-row: 40 / 60;
    -webkit-clip-path: polygon(0 100%, 57% 0, 100% 48%, 100% 100%, 0 100%);
    clip-path: polygon(0 100%, 57% 0, 100% 48%, 100% 100%, 0 100%);
    margin-left: -15%;
    margin-top: -7px;
  }   
}

  /*** Floating Text ***/
  .text-box{
    position: absolute;
    top: 560px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  .text{
    display: block;
    text-align: center;
    color: whitesmoke;
    text-shadow: 0px 3px 15px #000;
    font-family: 'Bangers', cursive;
    font-size: 3.5vmax;
  }
</style>