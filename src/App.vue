<template>
  <div id="app" class="centerBody">



        <keep-alive>
            <MyHeader></MyHeader>
        </keep-alive>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
        <keep-alive>
          <MyFooter></MyFooter>
        </keep-alive>

  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
import Blog from './components/blog'
import Vue from 'vue'



export default {
  name: 'app',

  components:{
    'blog':Blog,
    'MyHeader': Header,
    'MyFooter': Footer
  },

  data () {
    return {
        
    }
  },
    methods: {

    

    },
    created(){
      Vue.prototype.$logged = false;
    }
 
}
</script>

<style>


.centerBody{
  background-color: #ecf0f1;
}
body{
  background-color: #e0e0e0;
  height: 100%;
  
 
}


@media(min-width: 992px){

  body{
    padding-left: 10%;
    padding-right: 10%;


  }

}
</style>
