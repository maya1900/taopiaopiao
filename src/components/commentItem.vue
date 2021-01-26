<template>
  <div class="item">
    <div class="item-title">
      <img :src="getAvatar(commentArr.avatar)" alt="">
      <div class="user-info">
        <h5>{{commentArr.nickName}}</h5>
        <p>
          <span>购票</span>
          <em class="show-star"></em>
          <i>{{commentArr.remark}}</i>
        </p>
      </div>
    </div>
    <p class="item-content">{{commentArr.content}}</p>
    <div class="item-bottom">
      <span>{{timestampToTime(commentArr.commentTime)}}</span>
      <div class="bottom-msg">
        <i class="i1"></i>
        <span>{{commentArr.favorCount}}</span>
        <i class="i2"></i>
        <span>{{commentArr.replyCount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["commentArr"],
  methods:{
    getAvatar(val){
      return "https://gw.alicdn.com/"  + val
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
      var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
      var h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
      var m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
      var s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
      return Y+M+D+h+m+s;
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  position: relative;
  margin-top: 2.5vw;
  margin-bottom: 2.5vw;
  padding-bottom: 2.5vw;
  .item-title{
    display: flex;
    align-items: center;
    margin-bottom: 2.7vw;
    img{
      position: relative;
      width: 12vw;
      height: 12vw;
      margin-right: 4vw;
      flex-shrink: 0;
      border-radius: 100%;
      padding: 2px;
    }
    .user-info{
      flex: 1;
        h5{
        height: 25px;
        max-width: 72vw;
        font-size: .9375rem;
        font-weight: 700;
        display: inline-block;
        line-height: 22px;
        color: #000;
        vertical-align: middle;
        word-break: break-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p{
        min-height: 2.7vw;
        span{
          color: #ff5456;
          border: 1px solid rgba(255,84,86,.4);
          border-radius: 4px;
          font-size: 12px;
          font-weight: 400;
          white-space: nowrap;
          height: 15px;
          line-height: 15px;
          padding: 0 3px;
          border-radius: 2px;
          display: inline-block;
        }
        .show-star{
          display: inline-block;
          vertical-align: middle;
          width: 55px;
          height: 11px;
          background-size: 11px 11px;
          background-image: url("http://gw.alicdn.com/tfs/TB1Kto9f1L2gK0jSZPhXXahvXXa-32-32.svg");
        }
        i{
          display: inline-block;
          font-size: .8125rem;
          color: #ff6e00;
          font-style: normal;
        }
      }
    }
  }
  .item-content{
    font-size: .9375rem;
    line-height: 6.4vw;
    color: #000;
    max-height: 168px;
    overflow: hidden;
    margin-right: 16px;
  }
  .item-bottom{
    margin-top: 2.5vw;
    padding-bottom: 15px;
    display: flex;
    font-size: .8125rem;
    line-height: 5.3vw;
    color: #bcbcbc;
    justify-content: space-between;
    .bottom-msg{
      i{
        display: inline-block;
        width: 4.3vw;
        height: 4.3vw;
        margin-right: .8vw;
        vertical-align: top;
      }
      .i1{
        background-image: url(//gw.alicdn.com/tfs/TB1SeqMr1bviK0jSZFNXXaApXXa-35-36.svg);
      }
      .i2{
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPage 1%3C/title%3E%3Cg fill='%23bcbcbc' fill-rule='evenodd'%3E%3Cpath d='M14.13 25.47c-1.35.016-2.673-.203-3.933-.647-.452-.16-.917-.24-1.393-.24-.222 0-.444.017-.663.052l-2.842.32c-.042.007-.083.01-.12.01-.238 0-.37-.06-.502-.265-.063-.097-.04-.39.11-.705l.336-.705c.455-.955-.008-1.957-.605-2.832-1.288-1.885-1.975-4.097-1.99-6.388C2.494 7.76 7.594 2.587 13.895 2.532h.104c6.304 0 11.45 5.128 11.467 11.433.02 6.167-5.173 11.434-11.335 11.504zM26.885 8.52c-.707-1.664-1.716-3.153-3.002-4.435-1.285-1.282-2.778-2.287-4.445-2.99C17.714.37 15.884 0 13.998 0h-.125c-3.738.034-7.24 1.512-9.855 4.166C1.406 6.82-.022 10.344 0 14.083c.015 2.802.858 5.497 2.43 7.804.35.51.4 1.172.137 1.724l-.367.768c-.34.71-.29 1.53.13 2.193.418.666 1.137 1.067 1.915 1.067.125 0 .25-.01.375-.03l3.25-.53c.16-.026.318-.037.477-.037.344 0 .684.057 1.013.174 1.49.52 3.05.786 4.638.786h.163c1.857-.023 3.667-.412 5.376-1.164 1.644-.723 3.126-1.747 4.404-3.04 1.274-1.293 2.276-2.79 2.975-4.446.726-1.72 1.092-3.535 1.085-5.392-.008-1.886-.382-3.716-1.115-5.436z'/%3E%3Crect x='13' y='11' width='2.4' height='5' rx='1.2'/%3E%3Crect x='19' y='11' width='2.4' height='5' rx='1.2'/%3E%3C/g%3E%3C/svg%3E");
      }
      span{
        margin-right: 16px;
      }
    }
  }
}

</style>
