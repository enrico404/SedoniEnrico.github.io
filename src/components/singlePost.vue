<template>
  <div>
      
    <article class="card art">
        <img class="card-img-top" v-bind:src="'src/assets/'+post[0].img" alt="card img" />

        <p id="tit">{{ post[0].titolo.toUpperCase()  }}</p>
        <p id="par">{{ post[0].descr }}</p>
    </article>
  </div>
</template>

<script>


import Vue from 'vue'
export default {


  components:{
  
  },

  data () {
    return {
        titolo: this.$route.params.titolo,
        post:{}
    }
  },
    methods: {

    

    },
    created(){
      /* ho dovuto usare una post request perchè altrimenti non mi passava l'oggetto*/ 
      this.$http.post('https://frozen-atoll-57034.herokuapp.com/singlePost', {
              titolo: this.titolo,
             


            }).then(function(data){
            this.post = data.body.rows;
           
        });
      
    }
 
}
</script>

<style scoped>
.card-img-top{
  width: 400px;
  height: 180px;

}
.art{

    width: 60%;
    padding-top: 200px;
    background-color: transparent;
    border: none;
    margin-left: 50px;
    animation-name: entry;
    animation-duration:0.4s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    margin-bottom: 280px;
    }

@keyframes entry{

  from{
    opacity: 0;
  }to{
    opacity: 1;
  }

}
#tit{
    font-size: 26pt;
    font-weight: bold;
    margin-top: 50px;
    border-bottom: 1px solid gray;
}


@media (max-width: 576px){

  .art{
     padding-top: 250px;
     width: 80%;
  }
  #tit{
      font-size: 22pt;
  }
  
  .card-img-top{

      width: 300px;
      height: 140px
  }
  

}


</style>
