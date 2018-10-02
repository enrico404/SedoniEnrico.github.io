<template>
<span v-touch:swipe.left="swipeHandlerLeft" v-touch:swipe.right="swipeHandlerRight">
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
      <div class="loader" v-show="loading"><img src="../assets/loader.gif" width="120" height="80"></div>
      <div class="card articolo" v-for="post in filteredPosts" :key="post.titolo" v-show="!post.del" >
        <button class="removeB " v-on:click="removePost(post)">X</button>
        <router-link style="text-decoration:none" v-bind:to="'/blog/'+post.titolo">
          <img class="card-img-top" v-bind:src="'src/assets/'+ post.img" alt="card image" />
          <br><br>
          <h4 class="titoloArt card-title">{{ post.titolo | toUpperString}}</h4>
        </router-link>
        <p class="artData card-text">{{ post.data.slice(0,10) }}</p>
        <p class="card-text">{{ post.descr }}</p>
        <br>
        <hr>
      </div>
    </div>


</div>
</span>

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
        loading: false,

        post:{

          titolo: '',
          descr:'',
          data: '',
          img: '',
          // boolean variable that indicates if article is deleted or not
          del: ''
         

        },
        posts: [],
        showFlag: false,
        search:''
        
        


    }
  },


  methods:{
    //metodo per rimuove il singolo articolo dal db
    
    removePost(post){
        if(Vue.prototype.$logged != true){
        alert("Non sei loggato!!");
        return;
      }
      console.log("valore di del: ", post.del);
      console.log("Sto rimuovendo l'articolo: ", post.titolo);
      this.$http.post('https://frozen-atoll-57034.herokuapp.com/delete', {titolo: post.titolo}).then(function(data){

        console.log("risposta:", data);
        this.getArticles();   

      });
    
     



    },

    swipeHandlerLeft(){

      
      this.$router.push('/contacts');

    },
    swipeHandlerRight(){

      
      this.$router.push('/');

    },

    showDiv(){

        this.showFlag = !this.showFlag;


    },

    posta(){
      if(Vue.prototype.$logged != true){
        alert("Non sei loggato!!");
        return;
      }
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
     this.loading = true;
     this.$http.get('https://frozen-atoll-57034.herokuapp.com/blog/get').then(function(data){
      this.loading = false;
      this.posts = data.body;
      this.posts = this.posts.slice().reverse().slice(0,20);
      
      });


  }

  },

  created(){

    this.getArticles();
  
   


  },
  updated(){

   
        if(Vue.prototype.$logged == true){
          for(let ob of document.getElementsByClassName('removeB')){
            ob.setAttribute("style", "display:block");
          }
        }

  },

  mounted(){

  



    if(Vue.prototype.$logged == true){
        for(let ob of document.getElementsByClassName('removeB')){
          ob.setAttribute("style", "display:block");
        }


        document.getElementById('buttonCreate').style.display = 'block';
      
    }else{

      EventBus.$on("LOG_SUCCESS", function(){

        try {
           for(let ob of document.getElementsByClassName('removeB')){
               ob.setAttribute("style", "display:block");
           }
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
.loader{

  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
  margin-bottom: 200px;

}

.removeB{
    display: none;
    width: 20px;
    height: 20px;
    margin-left:83%;
    background: none;
    border: none;
    color: gray;
    transition: 0.5s;
    text-align: center;
    font-size: 10pt;
  }

.removeB:hover{
  background-color: red;
  color: white;

}


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
  margin-top: 280px;

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
  width: 350px;
  height: 160px;

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
  font-size: 16pt;

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

hr{
  border: 0.4px solid gray;
  width: 50vw;
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
  .removeB{

    margin-left: 120%;

  }
  hr{
  border: 0.4px solid gray;
  width: 80vw;
}

}

@media (max-width: 576px){

  .card-img-top{

      width: 220px;
      height: 110px
  }
  .inputPost{
    left: 0%;
    width: 100vw;
    top: 5%;

  }

.removeB{

    margin-left: 125%;
    font-size: 12pt;

  }
  
  
}


</style>
