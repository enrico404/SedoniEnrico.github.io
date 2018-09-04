<template>
 <div>
   <div class="footer">
     <p class="text">{{ msg }}</p>

   </div>
 </div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'Created by Sedoni Enrico'
    }
  }
}
</script>

<style>
.footer{
  background-color: #2980b9;
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 12px;
  padding-bottom: 2px;
  text-align: center;
  margin-top:180px;


}
.text{
  color: white;

}



</style>
