<template>
  <div class="item">
    <div class="f1">
      <img :src="getUrl" alt="">
      <span>{{videoList.showDetailTag}}</span>
      <div class="video-playing" v-if="playing">播放中</div>
      <div class="video-duration" v-else>{{getDuration}}</div>
    </div>
    <div class="f2">
      <p :class="{select:playing}">{{videoList.title}}</p>
      <span :class="{select:playing}">{{(videoList.playCount / 10000).toFixed(1)}}万次播放</span>
    </div>
  </div>
</template>

<script>
export default {
  props:["videoList","playing"],
  computed:{
    getUrl(){
      return this.videoList.ossCoverUrl
    },
    getDuration(){
      let m = (this.videoList.duration / 60) > 10 ? parseInt(this.videoList.duration / 60) : "0" + parseInt(this.videoList.duration / 60);
      let s = (this.videoList.duration % 60) > 10 ? parseInt(this.videoList.duration % 60) : "0" + parseInt(this.videoList.duration % 60); 
      return m + ":" + s;
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  height: 75px;
  margin-bottom: 15px;
  display: flex;
  .f1{
    width: 130px;
    position: relative;
    img{
      height: 75px;
      width: 130px;
    }
    span{
      opacity: .6;
      background: #000;
      border-radius: 2px;
      padding: .8vw;
      font-size: 12px;
      color: #fff;
      line-height: 12px;
      position: absolute;
      top: 5px;
      left: 5px;
      transform: scale(.8);
    }
    .video-playing{
      padding: 3px 6px;
      right: 0;
      bottom: 0;
      position: absolute;
      font-size: 13px;
      color: #fff;
      text-align: center;
    }
    .video-duration{
      position: absolute;
      right: 0;
      bottom: 0;
      color: #fff;
      font-size: 11px;
      padding: .8vw 1.6vw;
    }
  }
  .f2{
    padding-left: 10px;
    p{
      font-size: .9375rem;
      margin-top: 1.6vw;
      line-height: 4.8vw;
      height: 9.6vw;
      color: #50505a;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    span{
      font-size: 12px;
      color: #999;
      margin-top: 1.6vw;
    }
    .select{
      color: #ff5456;
      height: 9.3vw;
    }
  }
}
</style>
