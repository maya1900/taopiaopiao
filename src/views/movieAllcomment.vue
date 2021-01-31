<template>
  <main>
    <div class="header">
      <CommentTab :commentOb="this.$store.state.movieDetail.allComment"/>
    </div>
    <div class="com">
      <CommentItem v-for="(v,i) in this.$store.state.movieDetail.allComment.comments" :key="i" :commentArr="v"/>
    </div>
  </main>
</template>

<script>
import CommentTab from 'com/commentTab';
import CommentItem from 'com/commentItem';
export default {
  mounted(){
    this.$store.dispatch("movieDetail/getAllCommentData",this.$route.query.showid)
  },
  components:{
    CommentTab,CommentItem
  }
}
</script>

<style lang="scss" scoped>
main{
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header{
    // position: fixed;
    // top: 0;
    // background-color: #fff;
    padding-top: 20px;
    height: 160px;
  }
  .com{
    position: relative;
    margin-left: 16px;
    overflow-y: auto;
    flex: 1;
  }
}
</style>
