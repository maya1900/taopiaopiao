<template>
  <div class="user">
    <main>
      <div class="con">
        <div class="header">
          <span></span>
          <h4>{{ name }}</h4>
        </div>
        <div class="ticket">
          <p><i class="order"></i><span>电影票</span></p>
          <p><i class="ordee"></i><span>优惠券</span></p>
        </div>
        <a href="javascript:;">淘票票乐影卡</a>
        <a href="javascript:;">帮助与反馈</a>
      </div>
    </main>
    <BottomBar />
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$route.query.name == "") {
      this.$router.push("/login");
    }
    // this.name = this.$route.query.name
  },
  data() {
    return {
      name: "111",
    };
  },
};
</script>

<style lang="scss" scoped>
.user {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  .con{
    background-color: #fff;
  }
  flex: 1;
  overflow-y: auto;
  .header {
    width: 100%;
    height: 170px;
    background-color: #ff5456;
    padding: 30px 25px 0;
    box-sizing: border-box;
    span {
      display: inline-block;
      height: 19vw;
      width: 19vw;
      border-radius: 50%;
      overflow: hidden;
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
      background-image: url(https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png);
      // vertical-align: middle;
    }
    h4 {
      display: inline-block;
      // line-height: 1.2;
      font-weight: 500;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 64vw;
      font-size: 1.25rem;
      margin-left: 4vw;
      color: #fff;
      margin-bottom: 20px;
    }
  }
  .ticket {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      flex: 1;
      margin-top: 45px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .order {
        width: 27px;
        height: 27px;
        background: url("data:image/svg+xml;charset=utf8,%3Csvg width='47' height='47' viewBox='0 0 47 47' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3E电影票@3x%3C/title%3E%3Cg fill='%23FF4D64' fill-rule='evenodd'%3E%3Cpath d='M43.642 23.533c0 11.104-9 20.132-20.144 20.132-11.144 0-20.136-9.028-20.136-20.132 0-11.157 8.992-20.184 20.136-20.184 11.145 0 20.144 9.026 20.144 20.183zm-8.447 20.352c2.895-.464 6.51-.478 9.21.79.632.297 1.628.122 2.004-.577.697-1.45-.518-2.097-1.376-2.525-1.664-.86-3.56-.966-5.492-.966C44.102 36.31 47 30.24 47 23.527 47 10.527 36.484 0 23.5 0 10.517 0 0 10.528 0 23.527 0 36.472 10.515 47 23.498 47c4.292 0 8.262-1.127 11.697-3.115z'/%3E%3Cpath d='M36.863 23.5c0 1.782-1.445 3.225-3.226 3.225-1.78 0-3.225-1.443-3.225-3.225s1.444-3.225 3.225-3.225c1.78 0 3.226 1.443 3.226 3.225zM26.725 33.637c0 1.78-1.444 3.226-3.225 3.226-1.78 0-3.225-1.445-3.225-3.226 0-1.78 1.444-3.225 3.225-3.225 1.78 0 3.225 1.444 3.225 3.225zM26.725 13.363c0 1.78-1.444 3.225-3.225 3.225-1.78 0-3.225-1.444-3.225-3.225 0-1.78 1.444-3.226 3.225-3.226 1.78 0 3.225 1.445 3.225 3.226zM16.588 23.5c0 1.78-1.444 3.225-3.225 3.225-1.78 0-3.226-1.444-3.226-3.225 0-1.78 1.445-3.225 3.226-3.225 1.78 0 3.225 1.444 3.225 3.225z'/%3E%3C/g%3E%3C/svg%3E")
          no-repeat;
        background-position: 50%;
        background-size: contain;
      }
      .ordee {
        width: 27px;
        height: 27px;
        background: url("data:image/svg+xml;charset=utf8,%3Csvg width='51' height='42' viewBox='0 0 51 42' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3E优惠券@3x%3C/title%3E%3Cg fill='%23FEA54C' fill-rule='evenodd'%3E%3Cpath d='M50.006 13.073v3.158c-3.038 0-5.5 2.457-5.5 5.487 0 3.03 2.462 5.486 5.5 5.486v3.217H50V34c0 4.418-3.582 8-8 8H8c-4.418 0-8-3.582-8-8V27.466c3.038 0 5.5-2.456 5.5-5.486S3.038 16.494 0 16.494V8c0-4.418 3.582-8 8-8h34c4.418 0 8 3.582 8 8v5.073h.006zM46.9 29.847c-3.25-1.27-5.496-4.5-5.496-8.13 0-3.61 2.293-6.793 5.495-8.06V8.252c0-2.762-2.24-5-5-5H8.224c-2.76 0-5 2.238-5 5v5.715c3.14 1.3 5.377 4.447 5.377 8.013 0 3.585-2.19 6.78-5.377 8.082v3.67c0 2.762 2.24 5 5 5H41.9c2.76 0 5-2.238 5-5v-3.885z'/%3E%3Cpath d='M26.334 21.69v2.58h5.697c.83 0 1.5.672 1.5 1.5v.12c0 .83-.67 1.5-1.5 1.5h-5.696v3.86c0 .827-.67 1.5-1.5 1.5h-.194c-.828 0-1.5-.673-1.5-1.5v-3.86h-5.214c-.83 0-1.5-.67-1.5-1.5v-.12c0-.828.67-1.5 1.5-1.5h5.214v-2.58h-5.17c-.828 0-1.5-.672-1.5-1.5v-.195c0-.828.672-1.5 1.5-1.5h4.45l-5.134-5.135c-.586-.586-.586-1.535 0-2.12l.008-.01.232-.228c.587-.58 1.53-.575 2.114.007l5.322 5.32.038.04.022-.022 5.322-5.322.008-.01c.59-.58 1.54-.572 2.122.018l.213.217c.578.588.574 1.53-.01 2.114l-5.13 5.13h4.528c.83 0 1.5.673 1.5 1.5v.196c0 .828-.67 1.5-1.5 1.5h-5.74z'/%3E%3C/g%3E%3C/svg%3E")
          no-repeat;
        background-position: 50%;
        background-size: contain;
      }
      span {
        font-size: 12px;
        margin-top: 10px;
      }
    }
  }
  a {
    text-decoration: none;
    color: #333;
    display: block;
    // width: 100%;
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #999;
    margin: 0 14px;
    position: relative;
    &::after {
      content: "";
      width: 3.2vw;
      height: 2.66666667vw;
      right: 3.73333333vw;
      background-image: url("data:image/svg+xml;charset=utf8, %3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M762.518 492.355L340.032 69.88c-10.842-10.846-28.426-10.846-39.273 0l-39.275 39.285c-10.847 10.836-10.847 28.415 0 39.262l363.57 363.575-363.57 363.56c-10.846 10.847-10.846 28.437 0 39.285l39.275 39.273c10.847 10.848 28.43 10.848 39.273 0l422.485-422.48c10.842-10.843 10.842-28.432 0-39.285z' fill='%23bcbcbc'/%3E%3C/svg%3E");
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>
