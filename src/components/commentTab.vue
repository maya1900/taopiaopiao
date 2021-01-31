<template>
  <ul>
    <li v-for="(v, i) in commentOb.tabs" :key="i">{{ v.name }}</li>
  </ul>
</template>

<script>
export default {
  props:["commentOb"]
};
</script>

<style lang="scss" scoped>
ul {
    padding: 0 4vw;
    overflow: hidden;
    li {
      float: left;
      margin-right: 2.1vw;
      margin-bottom: 2.7vw;
      padding: 1.86666667vw 4vw;
      text-align: left;
      line-height: 3.7vw;
      font-size: 0.8125rem;
      color: #000;
      position: relative;
      list-style: none;
      border: 1px solid #bcbcbc;
      border-radius: 100px;
    }
  }
</style>
