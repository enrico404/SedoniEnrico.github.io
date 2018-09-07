<template>
<div>

    <div  id="carouselExampleControls" class="carousel slide " data-ride="carousel">
      <div class="carousel-inner slider">
        <div class="carousel-item active">
          <img class="d-block w-100 imm" src="src/assets/img2.jpg"  alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 imm" src="src/assets/img3.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 imm" src="src/assets/img4.jpg" alt="Third slide">
        </div>

      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <br><br><br><br><br>
</div>
</template>

<script>


export default {


  data () {
    return {



    }
  }
}
</script>

<style>
.slider{
  
  height: 545px;

}
/* height and width of the images */
.imm{
  padding-top: 105px;
  width: 100%;
  height: 545px;

}

</style>
