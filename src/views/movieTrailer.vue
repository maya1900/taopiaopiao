<template>
  <div class="layout">
    <div class="header">
      <ul>
        <li @click="selecAll()" :class="{active:(selec=='全部')?true:false}">全部</li>
        <li v-for="(v,i) in this.$store.state.movieDetail.movieTrailer.imageTypes" :key="i" :class="{active:(selec==v)?true:false}" @click="selecI(v)">{{v}} </li>
      </ul>
    </div>
    <div class="con" v-if="this.$store.state.movieDetail.movieTrailer">
      <!-- {{getImgArr(this.selec)}} -->
      <img :src="v" alt="" v-for="(v,i) in getImgArr(this.selec)" :key="i">
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch("movieDetail/getMovieTrailer",this.$route.query.showid)
  },
  data(){
    return {
      selec:"全部"
    }
  },
  methods:{
    selecAll(){
      this.selec = "全部"
    },
    selecI(i){
      this.selec = i
    },
    getImgArr(j){
      let arr = []
      if(j == "全部"){
        for(let i in this.$store.state.movieDetail.movieTrailer.images){
          arr = arr.concat(this.$store.state.movieDetail.movieTrailer.images[i])
        }
      }else{
        arr = arr.concat(this.$store.state.movieDetail.movieTrailer.images[j])
        console.log(j)
      }
      for(let i = 0; i < arr.length; i++){
        arr[i] = "https://gw.alicdn.com/" + arr[i]
      }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  overflow-x: scroll;
  white-space: nowrap;
  width: 100%;
  ul{
    display: flex;
    height: 15vw;
    background-color: #fff;
    width: 120%;
    li{
      display: block;
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border-bottom: .3vw solid #d7d7d7;
      font-size: 1rem;
      text-align: center;
      line-height: 15vw;
      color: #666;
    }
    .active{
      color: #ff5456;
      border-bottom: 3px solid #ff5456;
    }
  }
}
.con{
  display: flex;
  flex-wrap: wrap;
  img{
    width: 122px;
    height: 120px;
    margin: 0 0 2px 2px;
  }
}
</style>
