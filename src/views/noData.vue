<template>
  <div>
    空空如也~~
    <span @click="back()">返回上一级</span>
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.go(-2)
    }
  }
}
</script>

<style>

</style>
