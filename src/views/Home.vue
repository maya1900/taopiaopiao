<template>
  <div>
    <Loading v-if="this.$store.state.comming.hotListArr.length==0"/>
    <div v-else class="home">
      
    <header>
      <div class="city">
        <img src="@/assets/logo.svg" alt="">
        <span>西安</span>
      </div>
      <div class="movie-tab" @click="movieTab">
        <span hot="s" :class="{selectTab:bool}">正在热映</span>
        <span :class="{selectTab:!bool}">即将上映</span>
        <span class="bottom-line" :style="{left:leftPosition}"></span>
      </div>
    </header>
    <keep-alive>
      <component :is="con" class="com"></component>
    </keep-alive>
    
    <BottomBar/>
    </div>
  </div>
</template>

<script>
import Comming from 'com/comming'
import Soon from 'com/soon'
export default {
  components:{
    Comming,Soon
  },
  methods:{
    movieTab(event){
      event.target.getAttribute("hot")?this.hotTab():this.commingTab()
    },
    hotTab(){
      this.bool = true
      this.leftPosition = "10%"
      this.con = "Comming"
    },
    commingTab(){
      this.bool = false
      this.leftPosition = "60%"
      this.con = "Soon"
    }
    
  },
  data(){
    return {
      bool:true,
      leftPosition:"10%",
      con:"Comming"
    }
  },
  mounted(){
    this.$store.dispatch("getHotList",1)
    this.$store.dispatch("getSoonList",1)
  },
}
</script>

<style scoped>
.home{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header{
  width: 100%;
  /* height: 50px; */
  background-color: #fff;
  
  z-index: 10;
}
.city{
    width: 42%;
    display: inline-block;
    vertical-align: top;
    height: 13.3vw;
    line-height: 13.3vw;
}
.city img{
  width: 25px;
  vertical-align: middle;
  margin-left: 15px;
}
.city span{
  font-weight: bold;
  margin-left: 10px;
}
.city span::after{
  content: "";
  left: 50%;
  top: -50%;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #333;
  display: block;
  position: relative;
  margin: -1px 0 0 8px;
}
.movie-tab{
  display: inline-block;
  height: 13.3vw;
  line-height: 13.3vw;
  font-size: 1rem;
  color: #777;
  text-align: center;
  position: relative;
}
.movie-tab span{
  margin-left: 20px;
}
.bottom-line{
  width: 25px;
  height: 3px;
  background: #ff5456;
  position: absolute;
  bottom: 1px;
  left: 65%;
  translate: all .5s;
}
.selectTab{
  color:#ff5456;
  font-weight: bold;
}

</style>
