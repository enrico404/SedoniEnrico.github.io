<template>
<div class="HeadGroup" >
   <div class="title">
     <h4 class="name" id="nome">{{ name }}</h4>
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
    </div>
 </div>

</template>

<script>
export default {

  data () {
    return {
      name: 'Sedoni Enrico',
      fontSize: 23
    }
  },

  methods:{

    handleScroll: function(){
      if(this.fontSize < 40)
        this.fontSize++;
      document.getElementById("nome").style.fontSize = this.fontSize +"px";


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

.router-link-exact-active > a{

  background-color: #43ae97;
  border-radius: 10px;
  color:white;


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


</style>
