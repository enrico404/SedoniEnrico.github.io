<template>
<div>
    <slider></slider>
    <anag></anag>
    <div class="text">
      <h2>Informazioni</h2>
      <p>Per qualsiasi informazione puoi contattarmi alla seguente mail: <span id="mail">{{ mail }}</span> </p>
      <br>
      <p>Di seguito sono presenti i link ai miei vari social e il mio profilo github in cui pubblico i miei ultimi lavori.</p>
        <div>
              <span>Facebook: </span>
              <a href="https://www.facebook.com/xXEnricoXx" target="_blank">
                <img src="src/assets/facebook.png" width="24" height="24" />
              </a><br><br>
              <span>Instagram: </span>
               <a href="https://www.instagram.com/enri_sedo/?hl=it" target="_blank">
                <img src="src/assets/instagram.png" width="24" height="24" />
              </a><br><br>
              <span>Linkedin: </span>
               <a href="https://www.linkedin.com/in/enrico-sedoni-0818ab12b/" target="_blank">
                <img src="src/assets/linkedin.png" width="24" height="24" />
              </a><br><br>
              <span>Github: </span>
              <a href="https://github.com/enrico404" target="_blank">
                <img src="src/assets/github.png" width="24" height="24" />
              </a>
            </div>
    </div>
</div>
</template>

<script>

import Slider from './slider'
import Anag from './anag'


export default {

  components:{
    'anag':Anag,
    'slider':Slider


  },

  data () {
    return {

        mail:'sedoni.enrico@gmail.com'

    }
  }
}
</script>

<style scoped>
.text{
  padding: 20px 20px;
  border-radius:10px;
  margin-top: 140px;
  margin-left: 100px;
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

a{
  margin-left: 10px;

}

h2{
text-align: center;
padding-bottom: 20px;
font-weight: bold;
}

#mail{
  font-weight: bold;

}
p, span {
  font-size: 11pt;
}

@media (max-width:992px ){

  .text{
    width: 100vw;
    margin-left: 0px;
    border-radius: 0px;
    margin-top: 300px;
    height: 500px;

  }


}



</style>
