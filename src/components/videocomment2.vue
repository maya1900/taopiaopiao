<template>
  <div class="item-1">
    <img :src="getAvatar()" alt="">
    <div class="item-right">
      <h5>{{comment2.userVO.nickName}}</h5>
      <p>{{comment2.content}}</p>
      <div class="item-bottom">
        <span>{{timestampToTime(comment2.commentTime)}}</span>
        <em>{{comment2.favorCount}}</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["comment2"],
    methods:{
    getAvatar(){
      return "//gw.alicdn.com/" + this.comment2.userVO.avatar
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
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
.item-1{
  padding-top: 10px;
  position: relative;
  display: flex;
  &::before{
    pointer-events: none;
    content: "";
    height: 1px;
    background: #a09c9c;
    left: 0;
    right: 5px;
    top: 0;
    transform-origin: 0 0;
    position: absolute;
    transform: scaleY(.5);
  }
  img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .item-right{
      flex: 1;
      margin-left: 10px;
      h5{
        font-weight: 700;
        display: flex;
        align-items: center;
        font-size: .9375rem;
        line-height: 4vw;
        margin-top: .8vw;
      }
      p{
        margin-top: 2.4vw;
        line-height: 5.6vw;
        word-wrap: break-word;
      }
      .item-bottom{
        margin-top: 1.6vw;
        padding-bottom: 2.4vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #999;
        font-size: .75rem;
        em{
          font-style: normal;
          margin-left: 5px;
          &::before{
            content:"";
            display: inline-block;
            background-position: 50%;
            background-size: contain;
            background-repeat: no-repeat;
            width: 4vw;
            height: 4vw;
            margin-right: 5px;
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 35 36' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3E点赞%3C/title%3E%3Cpath d='M32.028 18.562l-2.55 11.513c-.05.23-.18.612-.306.816-.434.64-.97 1.1-1.607 1.508-.84.434-1.71.638-2.55.638H9.968v-19.35c1.326-.41 4.36-1.685 4.36-5.82v-.434c0-2.35 1.71-4.468 4.26-4.468 2.142 0 3.545 1.455 4.183 3.37l.077.255c.434 1.914.434 4.058 0 5.973h4.667c1.48 0 3.06.97 3.698 1.863.638.894.867 1.864.867 3.37.025.23-.026.51-.052.766zM3 31.01V16.17c0-1.305.977-2.402 2.14-2.402 0 0 .93.052 1.86.078v19.542H5.14C3.953 33.414 3 32.316 3 31.01zm30.617-18.157c-1.07-1.49-3.445-3.004-5.925-3.004H25.84c.025-1.386-.105-2.744-.393-4.076l-.026-.08-.025-.077-.078-.26-.026-.054-.025-.052C24.195 2.013 21.585 0 18.505 0c-3.915 0-6.97 3.16-6.97 7.184v.444c0 1.908-.86 2.953-2.922 3.553-.052 0-.078.028-.104.028-.106 0-.315.026-.732.026-1.123 0-2.61-.08-2.61-.105H5.01C2.246 11.13 0 13.375 0 16.144v14.84C0 33.752 2.245 36 5.01 36h20.046c1.28 0 2.558-.313 3.784-.94l.157-.08.13-.077c.705-.47 1.62-1.15 2.376-2.273l.026-.026.025-.026c.417-.68.626-1.49.678-1.698l2.61-11.783.027-.078v-.106c.052-.34.13-.73.13-1.15-.026-1.462-.183-3.24-1.383-4.91z' fill='%23999999' fill-rule='evenodd'/%3E%3C/svg%3E");
          }
        }
      }
    }
}
</style>
