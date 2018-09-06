<template>
<div>

    <div class="profile">
            <img style="border-radius:20px;" src="src/assets/myPhoto.jpg" width="220" height="220" />
            <div class="social" >
              <a  href="https://www.facebook.com/xXEnricoXx" target="_blank">
                <img src="src/assets/facebook.png"  width="22" height="22" />
              </a>
               <a href="https://www.instagram.com/enri_sedo/?hl=it" target="_blank">
                <img src="src/assets/instagram.png" width="22" height="22" />
              </a>
               <a href="https://www.linkedin.com/in/enrico-sedoni-0818ab12b/" target="_blank">
                <img src="src/assets/linkedin.png" width="22" height="22" />
              </a>
              <a href="https://github.com/enrico404" target="_blank">
                <img src="src/assets/github.png" width="22" height="22" />
              </a>
            </div>
      <div class="cv">
        <img src="src/assets/CV.png" width="60" height="60"/>
        <button type="button" class="btn btn-primary" onclick="window.open('https://drive.google.com/open?id=1lksqHTVCJfjen2vZDKH1GKQ92L90EVAW')">Download my CV</button>
      </div>
    </div>
     <div class=" dataAnag shadow bg-white">
          <p>Cognome: {{ surname }}</p>
          <p>Nome: {{ name }}</p>
          <p>Eta': {{ age }}</p>

    </div>



</div>
</template>

<script>
export default {


  data () {
    return {
      name: 'Enrico',
      surname: 'Sedoni',
      age: '21',

    }
  }
}
</script>

<style>

.btn{
  font-size: 10pt;
  margin-left: 20px;




}
.cv{

  margin-top: 100px;


}

.profile{
  width: 220px;
  margin-right: 35px;
  float: right;
  margin-top: -40px;
}
.dataAnag{
  font-size: 8.5pt;
  border-radius: 10px;
  padding: 10px 16px;
  margin-top: 20px;
  margin-right: 40px;
  float: right;

  }

.social{
  margin-top: 10px;
  margin-left: 12px;

}


</style>
