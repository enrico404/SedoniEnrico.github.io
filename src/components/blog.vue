<template>
<div>

    <slider></slider>
    <anag></anag>


  <div class="blog">
      <div class="subtitle" >
      <h2 style="padding-left:15px; margin-top:-10px;">Blog</h2>

            
            <input class="inputSearch" type="text" v-model="search" placeholder="search an article"/>
            <button id="buttonCreate" class="btn btn-primary" style="margin-left:35px" v-on:click="showDiv" >
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
                <textarea name="descr" id="descr" cols="30" rows="10" v-model="post.descr"></textarea><br>
                <label class="btn btn-primary mb-4 mt-4">
                  Choose an image
                  <input type="file" style="position: fixed; top: -100em" id="image" />
                </label>
            </div>

      <div class="card articolo" v-for="post in filteredPosts" :key="post.titolo" >
        <img class="card-img-top" v-bind:src="'src/assets/'+ post.img" alt="card image" />
        <br>
        <router-link style="text-decoration:none" v-bind:to="'/blog/'+post.titolo"><h4 class="titoloArt card-title">{{ post.titolo | toUpperString}}</h4></router-link>
        <p class="artData card-text">{{ post.data.slice(0,10) }}</p>
        <p class="card-text">{{ post.descr }}</p>
        <br>
      </div>
    </div>


</div>
</template>

<script>

import Slider from './slider'
import EventBus from '../event_bus.js'
import Anag from './anag'
import Vue from 'vue'


export default {


  components:{

    'slider':Slider,
     'anag':Anag

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
        showFlag: false,
        search:''
        
        


    }
  },


  methods:{



    showDiv(){

        this.showFlag = !this.showFlag;


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
            this.$http.post('https://frozen-atoll-57034.herokuapp.com/blog/post', {
              titolo: this.post.titolo.toLowerCase(),
              descr: this.post.descr,
              data: this.post.data,
              img: this.post.img


            }).then(function(data){

                if(data.body == "errore"){
                  alert("Errore nell'inserimento del post, il titolo potrebbe già esistere!");

                }else {

                    this.showFlag = !this.showFlag;
                    this.getArticles();

                }

            });



         }
        else alert("inserire titolo e descrizione del post");

    },

  getArticles(){

     this.$http.get('https://frozen-atoll-57034.herokuapp.com/blog/get').then(function(data){

      this.posts = data.body;
      this.posts = this.posts.slice().reverse().slice(0,20);
      });


  }

  },

  created(){

    this.getArticles();
     


  },

  mounted(){

  
    
    if(Vue.prototype.$logged == true){


        document.getElementById('buttonCreate').style.display = 'block';
      
    }else{

      EventBus.$on("LOG_SUCCESS", function(){

        try {
           document.getElementById('buttonCreate').style.display = 'block';
          
        } catch (error) {
          console.log("bottone non definito");
        }
       
      });

    }



  },
  

  filters:{
    toUpperString(data){
      return data.toUpperCase();

    }


  },

  computed:{

    filteredPosts:function(){

      return this.posts.filter((post) => {

        return post.titolo.match(this.search.toLowerCase());
      });

    }

  },


}
</script>

<style>




.inputSearch{
  border: none;
  border-bottom: 1.2px solid #3498db;
  background-color: #ecf0f1;
  outline: none;
  width: 45%;
  margin-left: 35px;
  margin-bottom: 40px;
  height: 30px;
  transition: .3s ease-in;
}

.inputSearch:focus{
  background-color: #c2c5c7;

}
#buttonCreate{
  display: none;

}
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
  top: 12%;
  width: 50vw;
  left: 20%;
  animation-name: entrance;
  animation-duration:0.1s;
  animation-timing-function: linear;
  }

 /* animation */
  @keyframes entrance{
    0% { transform:  scale(0)}
    100% { transform:  scale(1); }


  }

/* responsive */
@media (max-width: 992px){
  .blog{

    margin-top: 280px;

  }

.inputPost{
    left: 0%;
    width: 100vw;
    top: 5%;
    

  }
  .inputSearch{

    width: 70%;

  }

}

@media (max-width: 576px){

  .card-img-top{

      width: 300px;
      height: 140px
  }
  .inputPost{
    left: 0%;
    width: 100vw;
    top: 5%;

  }

}


</style>
