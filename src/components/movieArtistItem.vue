<template>
  <div class="artist-item">
    <p>{{keys}}({{artists.length}})</p>
    <div class="item" v-for="(v,i) in artists" :key="i">
      <img :src="getPoster(v.avatar)" alt="">
      <div class="con">
        <h4>{{v.artisteName}}</h4>
        <span>{{v.artisteNameEn}}</span>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:["artists","keys"],
  methods:{
    getPoster(v){
      return "https://gw.alicdn.com/" + v
    }
  }
}
</script>

<style lang="scss" scoped>
  .artist-item{
    p{
      margin: 2.5vw 5vw 0;
      padding-bottom: 2.5vw;
      font-size: .8125rem;
      color: #999;
    }
    .item{
      background-color: #fff;
      padding: 18px;
      display: flex;
      align-items: center;
      img{
        margin-right: 9px;
        width: 60px;
        height: 88px;
      }
      .con{
        flex: 1;
        h4{
          color: #000;
          font-size: 1rem;
          width: auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: normal;
        }
        span{
          color: #666;
          font-size: .75rem;
          margin-top: .6vw;
          width: auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .right{
        margin-left: 3.8vw;
        text-align: right;
        width: 6.9vw;
        &::before{
          content: "";
          display: block;
          width: 2.5vw;
          height: 2.5vw;
          margin-left: 0;
          border-color: rgba(0,0,0,.2);
          border-style: solid;
          border-width: 0 .125rem .125rem 0;
          transform: rotateZ(-45deg);
        }
      }
    }
  }
</style>
