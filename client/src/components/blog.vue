<template>
<div>
    <MyHeader></MyHeader>
    <slider></slider>
    <anag></anag>

    <h2>Blog</h2>

          <button class="btn btn-primary" v-on:click="showDiv">
              Create a new post
          </button>


          <div class="inputPost" v-show="this.showFlag"><br>
              <button class="btn btn-primary" v-on:click="showDiv">
                indietro
              </button>
              <button id="crea" class="btn btn-primary" v-on:click="posta">
                Crea
              </button>
              <p class="titolo">Titolo:</p>
              <input type="text" name="testo" v-model="post.titolo"/>
              <p class="titolo">Descrizione:</p>
              <textarea name="descr" id="descr" cols="30" rows="10" v-model="post.descr"></textarea>

          </div>

    <div class="articolo" v-for="post in posts" :key="post.titolo">
      <h4 class="titoloArt">{{ post.titolo | toUpperString}}</h4>
      <p>{{ post.data }}</p>
      <p>{{ post.descr }}</p>
    </div>

    <MyFooter></MyFooter>
</div>
</template>

<script>

import Slider from './slider'
import Header from './header'
import Footer from './footer'
import Anag from './anag'


export default {

  components:{

    'slider':Slider,
    'MyHeader':Header,
    'MyFooter':Footer,
     'anag':Anag,

  },

  data () {
    return {


        post:{

          titolo: '',
          descr:'',

        },
        posts: [],
        showFlag: false


    }
  },


  methods:{

    showDiv(){

        this.showFlag = !this.showFlag


    },

    posta(){

        if(this.post.titolo != '' && this.post.descr != '') {
            this.$http.post('http://localhost:3000/blog/post', {
              titolo: this.post.titolo,
              descr: this.post.descr,
              data: new Data().toLocaleDateString()
            }).then(function(data){

                console.log(data);
            });
            this.showFlag = !this.showFlag;
         }
        else alert("inserire titolo e descrizione del post");
    }



  },

  created(){

    this.$http.get('http://localhost:3000/blog/get').then(function(data){
      this.posts = data.body.slice(0,10);


    });


  },

  filters:{
    toUpperString(data){
      return data.toUpperCase();

    }


  }


}
</script>

<style>




#crea{
  float: right;
  margin-right: 70px;

}
textarea{

  max-height: 340px;

}

h2{
  margin-left: 20px;
  margin-top:40px;
  margin-bottom: 20px;
  }

#descr{
  width: 85%;
  height: 45%;
  margin-left: 20px;



}
input{

  margin-left: 20px;
  width: 85%;

}

.titolo{
  padding-left: 20px;
  padding-top: 20px;
  font-size: 18pt;
  font-weight: bold;
  }

.inputPost{
  border: 1px solid gray;
  border-radius: 18px;
  background-color: white;
  width: 600px;
  height: 600px;
  position: absolute;
  margin-top: -450px;
  margin-left: 260px;
  z-index: 1;



  }


.articolo{
  border-radius: 8px;
  margin-left: 20px;
  margin-top: 50px;
  border: 1px solid gray;
  width: 60%;
  height: 150px;
  padding-left: 15px;
  padding-top: 15px;
  overflow-y: scroll;

  }
.titoloArt{

  font-weight:bold;
  transition: 0.2s ease-in;

}

.titoloArt:hover{
  cursor: pointer;
  color: #43ae97;
}

</style>
