<template>
 <div>
   <div style="height:180px;"></div>
   <div class="card-footer text-muted">
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
.card-footer{
  background-color: #2980b9;
  margin-top:180px;


}
.text{
  color: white;

}



</style>
