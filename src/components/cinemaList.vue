<template>
  <div class="item">
    <h3 class="title">
      <span>{{title}}</span>
      <div class="price">
        <p v-if="oriprice!=minprice" class="old">￥{{getprice(oriprice)}}</p>
        <p class="new">新人 ￥{{getprice(minprice)}}</p>起
      </div>
    </h3>
    
    
    <p class="address">{{address}}</p>
    <div class="other">
      <span v-for="(v,i) in support" :key="i" :class="{spec:v.tagName=='特惠票'}">{{v.tagName}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props:["title","address","support","minprice","oriprice"],
  methods:{
    getprice(val){
      return (val * 1.0 / 100).toFixed(2)
    }
  }
}
</script>

<style scoped>
.item{
  background-color: #fff;
  border-radius: 6px;
  padding: 11px 12px 15px;
  margin: 9px;
}
p{
  display: inline-block;
}
.title{
  font-weight: normal;
  display: flex;
  font-size: 16px;
  margin-bottom: 2px;
}
.title span{
  flex: 1;
}
.price{
  font-size: 12px;
  color: #999;
}
.price .new{
  color: #ff3d5c;
}
.price .old{
  text-decoration: line-through;
}
.address{
  color: #666;
  font-size: 12px;
  display: block;
}
.other{
  margin: 4px 0 0;
  font-size: 10px;
}
.other .spec{
  color: #ff6e00;
  border: 1px solid rgba(255,110,0,.4);
}
.other span{
  display: inline-block;
  color: #8896b1;
  border: 1px solid rgba(136,150,177,.4);
  border-radius: 4px;
  margin: 0 3px;
}
</style>
