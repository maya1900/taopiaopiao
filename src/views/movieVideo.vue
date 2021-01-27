<template>
  <div class="video">
    <div class="smartBanner">
      <img src="//gw.alicdn.com/tfs/TB1F3PwklfH8KJjy1XbXXbLdXXa-324-102.png" alt="">
      <span>在APP内打开</span><em>下载</em>
    </div>
    <section class="videoBanner" v-if="videoObj.videos">
      <video ref="video" :src="videoObj.videos[seleNum].playUrl.hd" preload="preload" autoplay="autoplay" controls></video>
      <!-- <span @click="videoPlay()" v-if="!isPlay"></span> -->
    </section>
    <section class="video-con">
      <div class="head-warpper" v-if="videoObj.show">
        <h3>{{videoObj.videos[seleNum].title}}</h3>
        <span>{{(videoObj.videos[seleNum].playCount / 10000).toFixed(1)}}万次播放</span>
      </div>
      <div class="video-info-wrapper" v-if="videoObj.show">
        <img :src="getPoster" alt="">
        <div class="video-info">
          <p><span>{{videoObj.show.showName}}</span>淘票票评分<em>{{videoObj.show.remark}}</em></p>
          <p class="pp">{{videoObj.show.openDay}} {{videoObj.show.country}}{{videoObj.show.director}}</p>
        </div>
        <div class="buy">购票</div>
      </div>
      <div class="content-topic">
        <h4>全部视频 <span>({{videoObj.count}}个)</span></h4>
        <div class="content-con">
          <div :class="{'content-con-con':!isSeeAllVideo}">
            <VideoItem v-for="(v,i) in videoObj.videos" :key="i" :videoList="v" :playing="i==seleNum?true:false" @click.native="videoClick(i)"/>
          </div>
          <span @click="seeAllVideo()" v-if="!isSeeAllVideo">查看全部{{videoObj.count}}个视频</span>
        </div>
      </div>
      <div class="comment" v-if="!isSeeAllVideo">
        <div class="hot-comment">
          <h2>热门评论</h2>
          <div class="hot-comment-item" v-for="(v,i) in videoCommentObj.hotList" :key="i">
            <Videocomment1 :comment1="v"/>
          </div>
        </div>
        <span>更多热门评论</span>
        <div class="all-comment">
          <h2>全部评论</h2>
          <div class="all-comment-item" v-for="(v,i) in videoCommentObj.allList" :key="i">
            <Videocomment1 :comment1="v"/>
          </div>
        </div>
        <span>去淘票票查看更多 ></span>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import VideoItem from 'com/videoItem';
import Videocomment1 from 'com/videocomment1';

export default {
 mounted(){
   this.getMovieVideo(this.$route.query.showid)
   this.getMovieVideoComment(this.$route.query.showid)
 },
 methods:{
   ...mapActions("movieDetail",["getMovieVideo","getMovieVideoComment"]),
   videoPlay(){
     this.$refs.video.play()
      this.isPlay = true
   },
   videoClick(i){
     //事件子组件触发事件需要加.native
     this.seleNum = i
     this.isPlay = true
   },
   seeAllVideo(){
     this.isSeeAllVideo = true
   }
 },
 computed:{
   ...mapState("movieDetail",["videoObj","videoCommentObj"]),
   getPoster(){
     return "//gw.alicdn.com/" + this.videoObj.show.poster
   }
 },
 components:{
   VideoItem,Videocomment1,
 },
 data(){
   return {
     seleNum:0,//传入一个值,如果序号==这个值,那么playing是true,组件里改变相应样式,
     isPlay:false,
     isSeeAllVideo:false
   }
 }
}
</script>

<style lang="scss" scoped>
.video{
  height: 100vh;
  overflow-x: hidden;
}
  .smartBanner{
    display: flex;
    width: 100%;
    z-index: 10;
    position: fixed;
    height: 17.3vmin;
    padding: 0 4vmin;
    // position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    overflow: hidden;
    img{
      width: 108px;
    }
    span,em{
      display: block;
      box-sizing: border-box;
      text-align: center;
      border-radius: 4px;
      white-space: nowrap;
      font-size: .8125rem;
      height: 2rem;
      height: 8.5vmin;
      line-height: 2rem;
      line-height: 8.5vmin;
      padding: 0 4vmin;
      font-style: normal;
    }
    span{
      margin-left: 55px;
      margin-right: 2.7vmin;
      border: 1px solid #8a869e;
      color: #8a869e;
    }
    em{
      border: 1px solid #ff4d64;
      color: #ff4d64;
    }
  }
  .videoBanner{
    position: fixed;
    top: 65px;
    z-index: 10;
    width: 100%;
    height: 213px;
    background-color: #000000;
    video{
      width: 100%;
      height: 100%;
    }
    span{
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -31.5px;
      margin-left: -31.5px;
      background: url(//g.alicdn.com/de/prismplayer/2.6.0/skins/default/img/play.png) no-repeat;
      background-size: contain;
      width: 63px;
      height: 63px;
      z-index: 10;
    }
  }
  .video-con{
    padding-top: 278px;
    background-color: #fff;
  }
  .head-warpper{
    padding: 10px 15px;
    position: relative;
    h3{
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
    span{
      font-size: 12px;
      color: #999;
    }
  }
  .video-info-wrapper{
    overflow: hidden;
    position: relative;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    height: 16.26666667vw;
    margin: 15px 4vw 0;
    padding-right: 4vw;
    img{
      width: 12vw;
      height: 16.26666667vw;
      background-repeat: no-repeat;
      background-size: cover;
      flex-shrink: 0;
    }
    .video-info{
      color: #8a869e;
      overflow: hidden;
      white-space: nowrap;
      display: block;
      padding: 0 4vw;
      flex: 1 1 auto;
      p{
        margin-bottom: 1.1vw;
        color: #222227;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        font-size: 13px;
        flex: 0 1 auto;
        line-height: 13px;
        span{
          margin-right: 10px;
        }
        em{
          color: #ff6e00;
          margin-left: 1.1vw;
          display: inline-block;
          font-style: normal;
        }
      }
      .pp{
        color: #8a869e;
        white-space: nowrap;
      }
    }
    .buy{
      color: #ff5456;
      border: 1px solid #ff5456;
      padding: 0 12px;
      width: 28px;
      height: 28px;
      line-height: 28px;
      font-size: 12px;
      border-radius: 120px;
    }
  }
  .content-topic{
    padding: 3.75vw 0;
    width: 100%;
    background-color: #fff;
    h4{
      margin-left: 4vw;
      font-size: 1.0625rem;
      line-height: 1;
      color: #000;
      font-weight: 700;
      span{
        font-size: .8125rem;
        color: #8a869e;
        line-height: 1;
        font-weight: 400;
      }
    }
    .content-con{
      margin: 15px 15px 0;   
      .content-con-con{
        height: 450px;
        overflow-y: hidden;
      }
      span{
        font-size: 15px;
        color: #00afff !important;
        text-align: center;
        display: block;
        padding-bottom: 4.3vw;
        margin: 0 4.26666667vw;
        width: auto;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .comment{
    padding: 0 15px;
    h2{
      padding-top: 20px;
      font-size: 18px;
    }
    .hot-comment{
      max-height: 731px;
      overflow: hidden;
    }
    span{
      color: #00afff;
      padding: 4vw 0;
      text-align: center;
      display: block;
    }
  }
</style>
