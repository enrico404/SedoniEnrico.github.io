<template>
<div class="HeadGroup" >
   <div class="title">
     <p class="name" id="nome">{{ name }}</p>
   </div>
    <div class="nb">
      <ul class="nav justify-content-end ">
        <li class="nav-item">
          <router-link to='./'>
            <a class="nav-link active" >Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='./blog'>
             <a class="nav-link">Blog</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='./contacts'>
            <a class="nav-link">Contacts</a>
          </router-link>
        </li>
      </ul>

      <button class="btn" v-on:click="showForm">Login</button>
    </div>

     <div class="log" v-show="this.showFlag">
    <form>
      <p>Username: </p>
      <input type="text" ref="user" />
      <br><br>
      <p>Password: </p>
      <input type="password" ref="password" />
      <br><br>
      <button class="btn btn-primary cancelB" v-on:click="showForm">Cancel</button>
      <button class="btn btn-primary loginB" v-on:click="loginF">Login</button>
    </form>

  </div>


 </div>


</template>

<script>



export default {


  data () {
    return {
      name: 'Sedoni Enrico',
      fontSize: 40,
      showFlag: false,
      user: '',
      psw: '',
      account: []
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

      this.user = this.$refs.user.value;
      this.psw = this.$refs.password.value;

      if(this.user != '' && this.psw != ''){

        this.$http.post('http://localhost:3000/login',{

          user: this.user


        }).then(function(data){

          this.account = data.body;
          if(this.user = account[0].unsername && this.psw == account[0].password){

            alert("accesso riuscito!")
          }else alert("cedenziali errate, riprova! User: "+data.body.unsername+" psw: "+ data.body.password);

        });


      }else alert("Devi inserire lo username e la password!");

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

  margin-top: -35px;
  position: absolute;
  background-color: transparent;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: underline;
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

}


.cancelB{

  float:left;
}

.log{
  position: fixed;
  background-color: white;
  border: 1px solid gray;
  left: 33%;
  top: 20%;
  border-radius: 10px;
  padding: 20px 20px;
  width: 23%;

}


</style>
