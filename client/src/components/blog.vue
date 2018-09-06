<template>
<div>
    <MyHeader></MyHeader>
    <slider></slider>
    <anag></anag>


  <div class="blog">
      <div class="subtitle">
      <h2 style="padding-left:15px; margin-top:-10px;">Blog</h2>

            <button class="btn btn-primary" style="margin-left:35px" v-on:click="showDiv">
                Create a new post
            </button>
      </div>

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
                <label class="btn btn-primary mb-4 mt-4">
                  Choose an image
                  <input type="file" style="position: fixed; top: -100em" id="image" />
                </label>
            </div>

      <div class="card articolo" v-for="post in posts" :key="post.titolo" >
        <img class="card-img-top" v-bind:src="'src/assets/'+ post.img" alt="card image" />
        <br>
        <h4 class="titoloArt card-title">{{ post.titolo | toUpperString}}</h4>
        <p class="artData card-text">{{ post.data.slice(0,10) }}</p>
        <p class="card-text">{{ post.descr }}</p>
        <br>
      </div>
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
          data: '',
          img: ''

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
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0
        var yyyy = today.getFullYear();

        var currentDate = yyyy+'-'+mm+'-'+dd;
        this.post.data = currentDate;

        // if image is not set, i'll load the default image

        try {
          this.post.img = document.getElementById('image').files.item(0).name;
        } catch (error) {
          this.post.img = 'default.jpg';
        }



        if(this.post.titolo != '' && this.post.descr != '' ) {
            this.$http.post('http://localhost:3000/blog/post', {
              titolo: this.post.titolo,
              descr: this.post.descr,
              data: this.post.data,
              img: this.post.img


            }).then(function(data){

                alert(data.body);

            });


            this.showFlag = !this.showFlag;
            location.reload();
         }
        else alert("inserire titolo e descrizione del post");
    }



  },

  created(){

    this.$http.get('http://localhost:3000/blog/get').then(function(data){

      this.posts = data.body;
      this.posts = this.posts.slice().reverse().slice(0,20);


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

.blog{
  height: 40%;


}


.subtitle{

  opacity: 0;
  animation-name: entry;
  animation-duration:0.4s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

}


@keyframes entry{

  from{
    opacity: 0;
  }to{
    opacity: 1;
  }

}


.card-img-top{
  width: 400px;
  height: 180px;

}


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




.articolo{
  background: transparent;
  margin-left: 20px;
  margin-top: 50px;
  border: none;
  width: 60%;
  padding-left: 15px;
  padding-top: 15px;
  border-bottom: 1px solid gray;
  border-radius: 0px;
  opacity: 0;
  animation-name: entry;
  animation-duration:0.4s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;



  }
.titoloArt{

  font-weight:bold;
  transition: 0.2s ease-in;

}

.titoloArt:hover{
  cursor: pointer;
  color: #43ae97;
}

.artData{

  font-size: 10pt;

}


.inputPost{
  border: 1px solid gray;
  border-radius: 0px;
  background-color: white;
  z-index: 1;
  position: fixed;
  top: 20%;
  left: 33%;
  animation-name: entrance;
  animation-duration:0.1s;
  animation-timing-function: linear;



  }

 /* animation */
  @keyframes entrance{
    0% { transform:  scale(0)}
    100% { transform:  scale(1); }


  }



</style>
