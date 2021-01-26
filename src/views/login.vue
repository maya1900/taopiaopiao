<template>
  <div class="login">
    <span class="logo"></span>
    <div class="name">
      <input type="text" placeholder="手机号/邮箱/会员名" v-model.lazy="name">
    </div>
    <div class="pwd">
      <input type="password" placeholder="请输入登录密码" v-model.lazy="pwd">
    </div>
    <div class="options">
      <span class="smslogin">短信验证码登录</span>
      <span class="register">免费注册</span>
    </div>
    <button @click="fun()">登录</button>
    <div class="mask" v-if="bool">
      <div class="pop">
        <span>{{errMsg}}</span>
        <em @click="err()">确定</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    fun(){
      if(this.name == ""){
        this.bool = true,
        this.errMsg = "请输入用户名"
      }else if(this.pwd == ""){
        this.bool = true,
        this.errMsg = "请输入密码"
      }else{
        //TODO:和数据库比对
        this.$router.push({path:"/user",query:{name:this.name}})
        
      }
    },
    err(){
      this.bool = false
    }
  },
  data(){
    return{
      name:"",
      pwd:"",
      errMsg:"",
      bool:false
    }
  }
}
</script>

<style scoped>
.login{
  padding: 0 20px;
  background-color: #fff;
  height: 100vh;
}
.logo{
  background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png) no-repeat 0 50px;
  background-size: contain;
  width: 80px;
  height: 130px;
  margin: 0 auto;
  display: block;
}
.name,.pwd{
  border-bottom: 1px solid #ff5000;
  margin: 40px 0 0;
}
input[type=text],input[type=password]{
  border: 0;
  padding-left: 5px;
  font-size: 16px;
  color: #333;
  height: 30px;
  width: 100%;
}
.options{
  margin: 20px 0 8px 0;
  color: #555;
  font-size: 14px;
  overflow: hidden;
}
.smslogin{
  float: left;
}
.register{
  float: right;
  cursor: pointer;
}
button{
  background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
  color: #fff;
  box-shadow: 0 2px 4px #f7c7b1;
  width: 100%;
  height: 45px;
  border-radius: 35px;
  margin-top: 15px;
  font-size: 16px;
  border: 0;
  margin-top: 35px;
  cursor: pointer;
}
.mask{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0,0,0,.65);
}
.pop{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background-color: #fff;
  width: 300px;
  height: 100px;
  margin: auto;
  text-align: center;
}
.pop span{
  display: block;
  padding: 20px;
}
.pop em{
  display: block;
  font-style: normal;
  font-size: 15px;
  color: #f40;
  width: 100%;
  border-top: 1px solid #ddd;
  line-height: 1.5;
  height: 20px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
