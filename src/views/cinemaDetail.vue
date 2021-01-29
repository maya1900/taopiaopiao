<template>
  <div class="item">
    <div class="item-header" v-if="cinemaItem.cinemaVo">
      <div class="info">
        <h3>{{cinemaItem.cinemaVo.cinemaName}}</h3>
        <p><span>{{cinemaItem.cinemaVo.address}}</span><em></em></p>
        <div class="label-info">
          <span v-for="(v,i) in cinemaItem.cinemaVo.supportList.slice(0,2)" :key="i">{{v.name}}</span></div>
      </div>
    </div>
    <section class="cinema-movies">
      <div class="scroll">
        <ul  :style="{transform: `translate3d(${transPosition}px, 0px, 0px)`}">
          <li v-for="(v,i) in cinemaItem.showVos" :key="i" :class="{active:(selec==i)?true:false}" :style=getPoster(v.poster) @click="liActived(i)"></li>
        </ul>
      </div>
      <div class="movie-name" v-if="cinemaItem.showVos">
          <h4>{{cinemaItem.showVos[selec].showName}}</h4>&nbsp;&nbsp;
          <span>淘票票评分<em>{{cinemaItem.showVos[selec].remark}}</em></span>
          <p>{{cinemaItem.showVos[selec].duration}}分钟 | {{cinemaItem.showVos[selec].type}} | <i>{{cinemaItem.showVos[selec].leadingRole}}</i></p>
        </div>
    </section>
    <section class="cinema-schedule">
      <div class="header" v-if="cinemaItem.showScheduleMap">
        <ul>
          <li v-for="(v,i) in getSchedule()" :key="i" :class="{active:(i==selecDate)?true:false}" @click="selecDat(i)">{{v.dateDesc}}</li>
        </ul>
      </div>
      <div class="schedule-con" v-if="thisSchedule[selecDate]">
        <ScheduleItem v-for="(v,i) in thisSchedule[selecDate].scheduleVos" :key="i" :schedules="v"/>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions,mapState} from "vuex";
import ScheduleItem from 'com/scheduleItem';
export default {
  components:{
    ScheduleItem
  },
  methods:{
    ...mapActions("cinema",["getCinemaDetail"]),
    getPoster(val){
      return "background-image:" + "url(http://gw.alicdn.com/" + val +")"
    },
    liActived(i){
      this.selec = i
      this.transPosition =149 - 85 * i
      // this.showid = this.cinemaItem.showVos[this.selec].showId
      // console.log(this.showid)
    },
    getSchedule(){
      if(this.cinemaItem.showScheduleMap){
        // this.cinemaItem.showScheduleMap.forEach((e,i) => {
        // if(i == this.cinemaItem.showVos[this.selec].showId){
        //   return e
        // }
      // });
      for(let i in this.cinemaItem.showScheduleMap){
          if(i == this.cinemaItem.showVos[this.selec].showId){
          this.thisSchedule = this.cinemaItem.showScheduleMap[i]
          return this.thisSchedule
        }
        }
      }
    },
    selecDat(i){
      this.selecDate = i
    }
    
  },
  mounted(){
    this.getCinemaDetail(this.$route.query.cinemaid)
  },
  computed:{
    ...mapState("cinema",["cinemaItem"]),
  },
  data(){
    return {
      selec:0,
      transPosition:149,
      thisSchedule:[],
      selecDate:0
    }
  }
}
</script>

<style lang="scss" scoped>
  .item{
    padding-bottom: 18.7vw;
    position: relative;
    &::after{
      bottom: 21.3vw;
      content: "";
      display: block;
      position: absolute;
      bottom: 8.8vw;
      left: 50%;
      margin-left: -6.9vw;
      width: 13.9vw;
      height: 4vw;
      background-image: url(http://gw.alicdn.com/tfs/TB1uGgzl7PoK1RjSZKbXXX1IXXa-106-30.svg);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
    }
  }
  .item-header{
    position: relative;
    padding-top: 1px;
    width: 100%;
    min-height: 50.66666667vw;
    align-items: center;
    background-color: #fff;
    &::before{
      content: "";
      position: absolute;
      top: -.53333333vw;
      left: 0;
      width: 100%;
      height: 50.66666667vw;
      background: url(http://gw.alicdn.com/tfs/TB11h1E4YY1gK0jSZTEXXXDQVXa-750-300.png);
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: top;
    }
    .info{
      box-shadow: 0 2px 16px 0 rgba(0,0,0,.05);
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #000;
      background: url(http://gw.alicdn.com/tfs/TB1DYeR37L0gK0jSZFtXXXQCXXa-376-178.png);
      background-repeat: no-repeat;
      background-size: 176px auto;
      background-position: 100% 0;
      padding: 4vw 3.2vw;
      margin: 17.33333333vw 2.4vw 0;
      border-radius: 2.4vw;
      background-color: #fff;
      h3{
        max-width: 85%;
        line-height: 1.25;
        font-size: 1.125rem;
        font-weight: 700;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p{
        margin-top: .8vw;
        line-height: 1.25;
        font-size: .75rem;
        text-align: center;
        span{
          display: inline-block;
          vertical-align: middle;
          width: auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 72vw;
        }
        em{
          display: inline-block;
          position: absolute;
          background: url(http://gw.alicdn.com/tfs/TB1JSa437L0gK0jSZFAXXcA9pXa-54-54.png);
          background-size: 5.33333333vw;
          background-position: 50%;
          background-repeat: no-repeat;
          width: 9.6vw;
          height: 9.6vw;
          top: 6.66666667vw;
          right: 4vw;
          background-color: #fff;
          border-radius: 100%;
          box-shadow: 0 0 18px 0 rgba(46,51,62,.08);
        }
      }
      .label-info{
        color: #959aa5;
        margin-top: 2.13333333vw;
        margin-bottom: .8vw;
        line-height: 1.25;
        font-size: .6875rem;
        span{
          margin-right: 6px;
        }
      }
    }
  }
  .cinema-movies{
    padding-top: 3.46666667vw;
    background-color: #fff;
    .scroll{
      position: relative;
      z-index: 1;
      width: 100%;
      height: 34.93333333vw;
      overflow: hidden;
      top: -10px;
      ul{
        display: flex;
        position: relative;
        white-space: nowrap;
        padding-top: 8vw;
        font-size: 0;
        line-height: 0;
        width: 100%;
        z-index: 1;
        transition-property: transform;
        transition-duration: 0ms;
        transform: translate3d(149.483px, 0px, 0px);
        li{

          display: flex;
          flex-shrink: 0;
          position: relative;
          width: 20.26666667vw;
          height: 26.66666667vw;
          border-radius: 6px;
          padding: 0;
          margin: 0;
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          box-sizing: border-box;
          background-color: #c9c9c9;
          margin-right: 10px;
          translate: all 1s;
        }
        .active{
          transform: scale(1.15) translateY(-6px);
          margin-right: 16px !important;
          margin-left: 6px !important;
        }
      }  
    }
    .movie-name{
        display: block;
        width: 100%;
        padding-top: 1.06666667vw;
        padding-bottom: 1.86666667vw;
        background-color: #fff;
        text-align: center;
        h4{
          display: inline-block;
          line-height: 1.25;
          font-size: 1.0625rem;
          font-weight: 500;
          overflow: hidden;
          word-break: break-all;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #2e333e;
          max-width: 69.33333333vw;
        }
        span{
          display: inline-block;
          line-height: 1.25;
          font-size: 1.0625rem;
          color: #ff8300;
          // 这里要注意一个问题行内元素与行内元素overflow:hidden会塌陷
          vertical-align: top;
          em{
            font-style: normal;
          }
        }
        p{
          margin-top: 1.86666667vw;
          margin-left: auto;
          margin-right: auto;
          color: #999;
          font-size: .75rem;
          line-height: 1.25;
          max-width: 92%;
          i{
            position: relative;
            display: inline-block;
            padding-right: 12px;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 130px;
            font-style: normal;
            vertical-align: bottom;
          }
        }
      }
  }
  .cinema-schedule{
    .header{
      color: #999;
      overflow: hidden;
      background-color: #fff;
      padding-top: 2.13333333vw;
      padding-bottom: 1.33333333vw;
      ul{
        width: 100%;
        height: 8vw;
        overflow-y: hidden;
        overflow-x: auto;
        white-space: nowrap;
        position: relative;
        li{
          position: relative;
          vertical-align: top;
          min-width: 9.33333333vw;
          margin-left: 2.66666667vw;
          text-align: center;
          display: inline-block;
          color: #999;
          font-size: .8125rem;
          margin-bottom: 2.4vw;
        }
        .active{
          font-size: .875rem;
          color: #000;
          font-weight: 500;
          &::after{
            content: "";
            width: 4.8vw;
            height: .8vw;
            border-radius: 5px;
            background-color: #ff5456;
            position: absolute;
            bottom: -11px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    .schedule-con{
      position: relative;
      margin-top: 2.4vw;
      margin-left: 2.4vw;
      margin-right: 2.4vw;
      background-color: #f5f5f5;
    }
  }
</style>
