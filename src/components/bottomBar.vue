<template>
  <div class="bottomBar">
    <router-link to="/home">
    <img v-show="route !== '/home'" src="@/assets/images/home.png" alt="">
    <img v-show="route == '/home'" src="@/assets/images/home_selected.png" alt=""><br>
    热映</router-link>
    <router-link to="/cinema">
    <img v-show="route !== '/cinema'" src="@/assets/images/cinema.png" alt="">
    <img v-show="route == '/cinema'" src="@/assets/images/cinema_selected.png" alt=""><br>
    影院</router-link>
    <router-link to="/user">
    <img v-show="route !== '/user'" src="@/assets/images/user.png" alt="">
    <img v-show="route == '/user'" src="@/assets/images/user_selected.png" alt="">
    <br>
    我的</router-link>
  </div>
</template>

<script>
export default {
  computed:{
    route(){
      // console.log(this.$route.path)
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.bottomBar{
  width: 100%;
  /* height: 50px; */
  background-color: #fff;
  /* position: fixed;
  bottom: 0; */
  display: flex;
  padding:7px 0;
  z-index: 50;
}
a{
  flex: 1;
  text-align: center;
  font-size: 0.7rem;
  text-decoration: none;
  color: #8a869e;
}
img{
  height: 20px;
}
.router-link-active{
  color:#ff4d64;
}
</style>
