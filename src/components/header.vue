<template>
<div class="HeadGroup" >
   <div class="title">
     <p class="name" id="nome">{{ name }}</p>
   </div>
    <div class="nb">
      <ul class="nav ">
        <li class="nav-item">
          <router-link to='/'>
            <a class="nav-link active" >Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/blog'>
             <a class="nav-link">Blog</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/contacts'>
            <a class="nav-link">Contacts</a>
          </router-link>
        </li>
      </ul>

      <button class="btn" v-on:click="showForm">{{login}}</button>
    </div>

     <div class="log" v-show="this.showFlag">
    
      <p>Username: </p>
      <input type="text" ref="user" v-model="user" v-on:keyup.enter="validate"/>
      <br><br>
      <p>Password: </p>
      <input type="password" ref="password" v-model="psw" v-on:keyup.enter="validate"/>
      <br><br>
      <button class="btn btn-primary cancelB" v-on:click="showForm">Cancel</button>
      <button class="btn btn-primary loginB" v-on:click="loginF">Login</button>
  

  </div>


 </div>


</template>

<script>


import EventBus from '../event_bus.js'
import Vue from 'vue'
export default {


  data () {
    return {
      name: 'Sedoni Enrico',
      fontSize: 40,
      showFlag: false,
      user: '',
      psw: '',
      account: [],
      login: 'Login'
   
    }
  },

  methods:{

    handleScroll: function(){
      if(window.scrollY != 0 && this.fontSize > 23)
        this.fontSize--;
      document.getElementById("nome").style.fontSize = this.fontSize +"px";

      if(window.scrollY == 0){
         document.getElementById("nome").style.fontSize = "40px";
         this.fontSize = 40;
         }
    },


    showForm(){
      this.showFlag = !this.showFlag;
    },


    loginF(){

     // this.user = this.$refs.user.value;
      //this.psw = this.$refs.password.value;

      if(this.user != '' && this.psw != ''){

        this.$http.post('https://frozen-atoll-57034.herokuapp.com/login',{

          user: this.user


        }).then(function(data){
          console.log(data.body[0].username);

          if(this.user == data.body[0].username && this.psw == data.body[0].password){

            alert("accesso riuscito!");
            this.login ="Sei loggato come: "+ this.user;
            this.showFlag = !this.showFlag;
            EventBus.$emit('LOG_SUCCESS');
           // variabile globale nella istanza vue
            Vue.prototype.$logged = true;
           


          }else alert("cedenziali errate, riprova!");

        });


      }else alert("Devi inserire lo username e la password!");

    },

    validate(){

      this.loginF();
        
    }


  },

  created () {
    document.addEventListener('scroll', this.handleScroll);
     

  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll);
  }


}
</script>

<style scoped>

.nb > .btn  {

  margin-top: 15px;
  position: fixed;
  background-color: transparent;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: underline;
  left: 0px;


}

.nb > .btn:hover{
  background-color:  #43ae97;
  color: white;


}

.router-link-exact-active > a{

  background-color: #43ae97;
  border-radius: 10px;
  color:white;
  animation-name: selectedMenu;
  animation-duration: 0.28s;
  animation-timing-function: linear;



}

@keyframes selectedMenu {
  0% { transform: scale(0)}
  50% { transform: scale(1)}
  80% {transform: scale(0.9)}
  100%{ transform: scale(1)}

}

a{
  color: black;
  font-weight: bold;
  font-size: 11.5pt;
  text-decoration: none;

}

a:hover{
  color:#95a5a6;
  transition: 0.1s ease-in;


}

.HeadGroup{
  position: fixed;
  z-index: 1;
  width: 100%;
}

.title{

  width: 100%;
  background-color: #2980b9;
  margin: 5x 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.name{
  font-size: 40px;
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}
.nb{
  width: 100%;
  background-color:white;
  opacity: 0.99;
  padding-bottom: 10px;
}
.nav-item{

  padding-top: 10px;
  height: 50px;
  padding-bottom:10px;


}


input{
  width: 90%;

}
.loginB{
  float: right;
  margin-right: 20px;
}


.cancelB{

  float:left;
  margin-left: 0px;
}

.log{
  position: fixed;
  background-color: white;
  border: 1px solid gray;
  left: 33%;
  top: 20%;
  border-radius: 10px;
  padding: 20px 20px;
  width: 300px;

}
ul{
  float: right;

}

.nb{
  padding-bottom: 60px;
}

input{

  border: none;
  border-bottom: 1px solid #3498db;
  transition:.4s;
}

input:focus{
  outline: none;
  background-color: #ecf0f1;
  
}

/* responsive */

@media (max-width: 576px){

  .nb > ul{
    float: left;
    padding-top: 45px;

  }
  .nb{
    padding-bottom: 110px;
  }

  .nb > .btn {

    float: left;
    left: -18px;


  }

.log{
  left: 18%;

}

}

</style>
