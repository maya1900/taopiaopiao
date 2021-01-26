<template>
  <section class="show-artists">
      <div class="title">
        <h4>{{title}}</h4>
        <span>{{num}}</span>
      </div>
      <div class="con">
        <ArtistItem v-for="(v,i) in list" :key="i" :name="v.artisteName" :rName="v.roleName" :imgUrl="v.avatar?getImgUrl(v.avatar):getImgUrl(v)">
          <template slot="name"></template>
          <template slot="rName"></template>
        </ArtistItem>
      </div>
    </section>
</template>

<script>
import ArtistItem from "com/artistItem";
export default {
  props:["title","num","list"],
  components:{
    ArtistItem
  },
  methods:{
    getImgUrl(val){
      return "https://gw.alicdn.com/"  + val;
    }
  }
}
</script>

<style lang="scss" scoped>
.show-artists{
  background-color: #fff; 
  .title{
    display: flex;
    h4{
    font-size: 17px;
    line-height: 10vw;
    padding-top: 2.5vw;
    padding-bottom: 2.5vw;
    color: #000;
    padding-left: 16px;
    font-weight: 500;
    }
    span{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
      padding-right: 16px;
      font-size: 12px;
      &::after{
        content: "";
        width: 4px;
        height: 4px;
        border-bottom: 1px solid;
        border-right: 1px solid;
        transform: rotateZ(-45deg);
        position: relative;
        top: 2px;
        margin-left: 2px;
      }
    }
  }
  .con{
     margin-left: 16px;
     overflow-x: scroll;
     display: flex;
     padding: 0 15px 15px 0;
  }
}
</style>
