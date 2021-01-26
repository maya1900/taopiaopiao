<template>
  <div class="item">
    <img :src="imgUrl" alt="" v-if="name">
    <img :src="imgUrl" alt="" v-else class="img2">
    <slot name="name"><h4>{{name}}</h4></slot>
    <slot name="rName" v-if="rName"><p>饰 {{rName}}</p></slot>
  </div>
</template>

<script>

export default {
  props:["imgUrl","name","rName"]
}
</script>

<style lang="scss" scoped>
.item{
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  img{
    width: 87px;
    height: 120px;
    margin-right: 5px;
  }
  .img2{
    width: 209px;
    height: 107px;
  }
  h4{
    font-size: 14px;
    color: #000;
    margin-top: 8px;
    font-weight: normal;
    line-height: 23px;
  }
  p{
    font-size: 12px;
    color: #666;;
  }
}
</style>
