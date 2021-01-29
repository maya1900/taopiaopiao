<template>
  <div class="list" v-if="this.$store.state.movieDetail.movieArtist">
    <MovieArtistItem  v-for="(v,i) in getlist" :key="i" :artists="v" :keys="i" />
  </div>
</template>

<script>
import MovieArtistItem from 'com/movieArtistItem';
export default {
  components:{
    MovieArtistItem
  },
  mounted(){
    //加入命名空间后需要给函数名加上模块名
    this.$store.dispatch("movieDetail/getMovieArtist",this.$route.query.showid)
  },
  computed:{
    //按照order给对象排序 
    getlist(){
      let oldObj = this.$store.state.movieDetail.movieArtist.artistes
      let newObj = {}
      let sortOrder = this.$store.state.movieDetail.movieArtist.sortOrder

      for(let i in sortOrder){
        for(let j in oldObj){
          if(sortOrder[i] == j && oldObj[j].length != 0){
            newObj[j] = oldObj[j]
          }
        }
      }
      // console.log(newObj)
      return newObj
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
