<template>
      <header>
      <span class="city">西安</span>
      <div class="sort">
        <div class="allInCity">全城</div>
        <div class="selector">筛选</div>
        <div class="sortSelector">综合排序</div>
        <span class="search"></span>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
  display: flex;
  width: 100%;
  color: #333;
  box-sizing: border-box;
  z-index: 100;
  background-color: #fff;
  padding: 5px 15px;
  justify-content: space-between;
  font-size: 15px;
}
.sort{
  box-sizing: border-box;
  text-align: right;
  display: flex;
  flex: 1;
}
.sortSelector{
  flex: 1;
}
.city{
  padding: 5.5px 18px 5.5px 0;
}
.allInCity,.selector,.sortSelector{
  padding: 5.5px 18px 5.5px 8px;
}
.city::after,.allInCity::after,.selector::after,.sortSelector::after{
  content:"";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #333;
  margin: 0 0 3px 3px;
}
.search{
  display: block;
  width: 20px;
  height: 20px;
  margin-left: 7px;
  margin-top: 5px;
  background: url(http://gw.alicdn.com/tfs/TB1EOXXsQL0gK0jSZFtXXXQCXXa-1024-1024.svg) no-repeat;
  background-size: 100%;
  color: #999;
}
</style>
