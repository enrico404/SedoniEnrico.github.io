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

export default {
  name: 'app',

  components:{
    'MyHeader': Header,
    'MyFooter': Footer
  },

  data () {
    return {

    }
  }
}
</script>

<style>



.body{
  background-color: #ecf0f1;
  height: 100%;

}
</style>
