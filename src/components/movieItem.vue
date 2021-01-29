<template>
  <div class="movieItem">
    <div class="movie-poster" @click="movieVideo(vvv.id)">
      <img :src="getPoster(vvv)" alt="" />
      <i class="i-play"></i>
    </div>
    <div class="movie-detail" @click="movieItem(vvv.id)">
      <h3>{{ vvv.showName }}</h3>
      <em class="mark" v-if="getMark1(vvv, 0) != ''">
        <em class="mark1">{{ getMark1(vvv, 0) }}</em>
        <em class="mark2">{{ getMark1(vvv, 1) }}</em>
      </em>
      <p class="movieScore" v-if="vvv.scoreAndFavor.score.scoreName!='暂无评分'">
        {{ vvv.scoreAndFavor.score.scoreName
        }}<span>{{ vvv.scoreAndFavor.score.score }}</span>
      </p>
      <p class="movieScore" v-else><span>{{vvv.scoreAndFavor.favorCount}}</span>&nbsp;&nbsp;人想看</p>
      <p>导演：{{ vvv.director }}</p>
      <p>主演：{{ vvv.leadingRole }}</p>
    </div>
    <div class="buyBtn">
      <span class="a" v-if="vvv.scoreAndFavor.score.scoreName!='暂无评分'" @click="buyTicket()">购票</span>
      <span class="b" v-else>预售</span>
    </div>
  </div>
</template>

<script>
export default {
  props:["vvv"],
  methods:{
    getPoster(v){
      let str = "https://gw.alicdn.com/" + v.poster
      // console.log(str)
      return str
    },
    getMark1(v,i){
      let str = v.showMark;
      // console.log(str)
      if(str != undefined){
        let arr = str.split(" ")
        return arr[i]
      }else{
        return ""
      }
    },
    movieItem(val){
      this.$router.push({path:"/movieDetail",query:{showid:val}})
    },
    movieVideo(val){
      this.$router.push({path:"/movieVideo",query:{showid:val}})
    },
    buyTicket(){
      this.$router.push("/login")
    }
  }
};
</script>

<style scoped>
.movieItem{
  padding: 4vw;
  background-color: #fff;
  display: flex;
}
.movie-poster{
  display: inline-block;
  position: relative;
}
.i-play, .i-play:after {
  display: block;
  top: 50%;
  left: 50%;
  position: absolute;
}
.i-play {
  background: hsla(0,0%,100%,.9);
  border-radius: 100%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
}
.i-play:after {
  content: "";
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 5px solid #000;
  border-bottom: 5px solid transparent;
  margin: -5px 0 0 -2px;
}
.movie-poster img{
  width: 64px;
  border-radius: 6px;
  /* vertical-align: top; */
}
.movie-detail{
  display: inline-block;
  margin-left: 5px;
  width: 65%;
}
.movie-detail h3{
  font-weight: normal;
  display: inline-block;
  font-size: 16px;
}
.mark{
  font-size: 10px;
  font-style: normal;
  height: 15px;
  line-height: 15px;
  font-weight: bold;
  margin-left: 4px;
  box-sizing: border-box;
  
}
.mark1{
  color: #fff;
  background-color: #afafaf;
  font-style: normal;
  border: 1px solid #afafaf;
  box-sizing: border-box;
}
.mark2{
  color: #afafaf;
  background-color: #fff;
  font-style: normal;
  border: 1px solid #afafaf;
  box-sizing: border-box;
  padding: 0 3px;
  box-sizing: border-box;
}
h3,p{
  margin: 0;
}
.movie-detail p{
  color: #666;
  font-size: 13px;
  margin-top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.movieScore span{
  color: #ff6e00;
  font-size: 14px;
  margin-left: 5px;
}
.buyBtn{
  /* display: inline-block; */
  float: right;
  margin-top: 30px;
}
.buyBtn span{
  border: 0;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  color: #fff;
  background-color: transparent;
  box-sizing: border-box;
  height: 28px;
  line-height: 28px;
  padding: 0 13px;
  font-size: 12px;
  border-radius: 120px;
  background-image: linear-gradient(45deg,#ff5456,#ff3d5c);
}
.buyBtn span.b{
  background-image: linear-gradient(45deg,#33bfff,#00afff);
}
</style>
