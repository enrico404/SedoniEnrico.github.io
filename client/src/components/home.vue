<template>
<div>
    <slider></slider>
    <anag></anag>

    <div class="about container">
        <p class="textAbout">About me..</p>
        <p class="text1">Benvenuto! Mi chiamo Sedoni Enrico ed ho 21 anni. Sono un ragazzo con la passione per l'informatica e la programmazione.
         Attualmente sto frequentando un corso di laurea in informatica presso l'università di Modena e Reggio Emilia (UNIMORE).
        Sono al terzo anno, quindi valuto offerte di lavoro sia part-time che full-time.<br><br>
        Questo è un sito realizzato interamente da me e verrà utlizzato come portfolio dei miei progetti personali.</p>
        <div class="aboutImm">
          <img src="src/assets/about1.png" width="180" height="145"  />
        </div>
    </div>


</div>
</template>

<script>
import Anag from './anag'
import Slider from './slider'



export default {

  components:{
    'anag':Anag,
    'slider':Slider


  },

  data () {
    return {



    }
  }
}
</script>

<style>


.about{
  padding: 20px 20px;
  border-radius:10px;
  margin-top: 140px;
  margin-left: 150px;
  width: 58%;
  height: 420px;
  background-color: #3498db;
  opacity: 0;
  animation-name: entry;
  animation-duration:0.4s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards

}
@keyframes entry{

  from{
    opacity: 0;
  }to{
    opacity: 1;
  }

}

.textAbout{
  font-weight: bold;
  font-size: 24pt;
  text-align: center;
  margin-bottom: 30px;
  color: white;

}

.text1{
  font-size: 11pt;
  color: white;
}

.aboutImm{
  float: right;
  margin-right: 80px;
  margin-top: 20px;

}

</style>
