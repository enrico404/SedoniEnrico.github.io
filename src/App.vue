<template>
  <div id="app" class="body">


    
        <keep-alive>
            <MyHeader></MyHeader>
        </keep-alive>
  
        <router-view></router-view>
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



.body{
  background-color: #ecf0f1;
  height: 100%;

}
</style>
