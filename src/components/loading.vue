<template>
  <div class="loading">
    <img src="@/assets/images/loading.svg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .loading{
    width: 100%;
    /* height: 80vh; */
    position: relative;
    z-index: 100;
  }

  img{
    width: 50px; 
    position: fixed;
    left: 50%;
    top:50%;
    /* transform: translate(-50%,-50%); */
    margin-left: -25px;
    margin-top: -25px;
    animation: load 1s infinite linear;
    /* transform-origin: 0 0; */
  }

  @keyframes load {
    0%{
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100%{
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
