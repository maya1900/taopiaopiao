<template>
  <div class="cont">
    <div class="time">
      <p>{{schedules.openTime}}</p>
      <span>{{schedules.closeTime}}散场</span>
    </div>
    <div class="type">
      <p><span>{{schedules.showVersion}}</span><em class="price">新人价￥<i>{{schedules.oriPrice / 100}}</i></em></p>
      <span class="hall">{{schedules.hallName}}</span>
    </div>
    <div class="buy">
      <span>购票</span>
    </div>
  </div>
</template>

<script>
export default {
  props:["schedules"]
}
</script>

<style lang="scss" scoped>
.cont{
  position: relative;
  display: flex;
  // width: 100%;
  margin-top: 2.4vw;
  padding: 2.66666667vw 2.13333333vw;
  flex-flow: row wrap;
  align-items: center;
  border-radius: 1.6vw;
  background-color: #fff;
  .time{
    width: 27%;
    p{
      height: 1.5rem;
      line-height: 1.5rem;
      color: #000;
      font-size: 1.1875rem;
    }
    span{
      height: 1.2rem;
      line-height: 1.2rem;
      color: #999;
      font-size: .75rem;
    }
  }
  .type{
    flex: 1;
    p{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      &>span{
        height: 1.2rem;
        line-height: 1.2rem;
        display: inline-block;
        overflow: hidden;
        word-break: break-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #333;
        font-size: .75rem;
        padding-right: 1.06666667vw;
      }
      .price{
        flex-shrink: 0;
        color: #ff5456;
        text-align: right;
        overflow: visible;
        font-size: .75rem;
        padding-left: .8vw;
        font-style: normal;
        i{
          font-weight: 500;
          font-size: 1.1875rem;
          font-style: normal;
        }
      }
    }
    .hall{
      color: #999;
      font-size: .75rem;
      height: auto;
      line-height: 1.1rem;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: .8vw;
    }
  }
  .buy{
    min-width: 17.1vw;
    padding-left: 4.8vw;
    text-align: right;
    span{
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
      font-weight: 700;
      background-color: #ffeaea;
      border-radius: 4.26666667vw;
      font-size: .75rem;
      color: #ff3d5c;
      background-image: none;
    }
  }
}
</style>
