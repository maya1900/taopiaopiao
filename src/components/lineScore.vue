<template>
  <div class="line-score">
    <div class="line-score-item" v-for="(v,i) in scoreDataList" :key="i">
      <div class="line-star">
        <div class="line-star-bg"></div>
        <div class="line-star-or" :style="getWidth1(i)"></div>
      </div>
      <div class="line-line">
        <div class="line-line-bg"></div>
        <div class="line-line-or" data-width="100.0" :style="getWidth(i)"></div>
      </div>
    </div>
    <!-- <div class="line-score-item">
      <div class="line-star">
        <div class="line-star-bg"></div>
        <div class="line-star-or" style="width: 80%"></div>
      </div>
      <div class="line-line">
        <div class="line-line-bg"></div>
        <div class="line-line-or" data-width="24.8" style="width: 24.8%"></div>
      </div>
    </div>
    <div class="line-score-item">
      <div class="line-star">
        <div class="line-star-bg"></div>
        <div class="line-star-or" style="width: 60%"></div>
      </div>
      <div class="line-line">
        <div class="line-line-bg"></div>
        <div class="line-line-or" data-width="4.2" style="width: 4.2%"></div>
      </div>
    </div>
    <div class="line-score-item">
      <div class="line-star">
        <div class="line-star-bg"></div>
        <div class="line-star-or" style="width: 40%"></div>
      </div>
      <div class="line-line">
        <div class="line-line-bg"></div>
        <div class="line-line-or" data-width="0.4" style="width: 0.4%"></div>
      </div>
    </div>
    <div class="line-score-item">
      <div class="line-star">
        <div class="line-star-bg"></div>
        <div class="line-star-or" style="width: 20%"></div>
      </div>
      <div class="line-line">
        <div class="line-line-bg"></div>
        <div class="line-line-or" data-width="0.4" style="width: 0.4%"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props:["scoreDataList"],
  methods:{
    getWidth(i){
      return "width:" + this.scoreDataList[i].score + "%"
    },
    getWidth1(i){
      return "width:" + this.scoreDataList[i].name * 20 + "%"
    }
  }
};
</script>

<style lang="scss" scoped>
.line-score{
  flex: 1;
  padding: 2.5px 10px;
  .line-score-item{
    margin: 5px 0;
    .line-star{
      float: left;
      width: 35px;
      height: 7px;
      position: relative;
      .line-star-bg{
        height: 100%;
        background-size: 7px 100%;
        background-image: url(//gw.alicdn.com/tfs/TB1HfFhhXP7gK0jSZFjXXc5aXXa-32-32.svg);
      }
      .line-star-or{
        position: absolute;
        z-index: 1;
        top: 0;
        height: 100%;
        opacity: .6;
        background-size: 7px 100%;
        background-image: url(//gw.alicdn.com/tfs/TB1uNpehoY1gK0jSZFMXXaWcVXa-32-32.svg);
      }
    }
    .line-line{
      position: relative;
      margin-top: 4px;
      margin-left: 40px;
      height: 3px;
      transform: translateY(-1px);
      top: 3px;
      .line-line-bg{
        height: 100%;
        background: #c8c8c8;
        border-radius: 100px;
      }
      .line-line-or{
        position: absolute;
        top: 0;
        z-index: 1;
        width: 0;
        height: 100%;
        background: #6f6f6f;
        border-radius: 100px;
        transition: width 1s ease-out .2s;
      }
    }
  }
}
</style>
