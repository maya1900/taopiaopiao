<template>
  <div class="comming">
    <MovieItem  v-for="(v, i) in this.$store.state.comming.hotListArr" :key="i" :vvv="v"/>
  </div>
</template>

<script>
import MovieItem from 'com/movieItem';
export default {
  components:{
    MovieItem
  },
  mounted(){
    document.querySelector(".comming").addEventListener('scroll', this.scrollBottom)
  },
  methods:{
    scrollBottom(){
      let clientHeight = document.documentElement.clientHeight;//文档高度
      let scrollHeight = document.querySelector(".comming").scrollHeight;//div正常高度
      let scrollTop = document.querySelector(".comming").scrollTop;//div滚动条高度
      let bool = true;//设置开关避免重复请求
      if(scrollTop + clientHeight >= scrollHeight-100){
        if(bool == true){
          bool == false;
          this.count++;
          if(this.count == 2){
            this.$store.dispatch("getHotList",this.count)
          }
        }
      }
    }
  },
  data(){
    return {
      count:1
    }
  }
};
</script>

<style scoped>
.comming{
  flex: 1;
  overflow-y: auto;
}
</style>
