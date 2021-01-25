<template>
  <div class="soon">
    <div v-if="this.$store.state.soon.soonListArr.length==0">请等待...</div>
    <div v-else v-for="(v,i) in getdate" :key="i">
      <span class="date">{{v}}</span>
      <MovieItem  v-for="(vv, ii) in getdatemoviearr(v)" :key="ii" :vvv="vv"/>
    </div>
  </div>
</template>

<script>
import MovieItem from 'com/movieItem';
export default {
  components:{
    MovieItem
  },
  data(){
    return {
      count:1
    }
  },
  methods:{
//得到某个时间下的电影条目
    getdatemoviearr(i){
        let eacharr = []
        let arr = this.$store.state.soon.soonListArr
        arr.forEach(ele=>{
          if(i == ele.openTime){
            eacharr.push(ele)
          }
        })
      return eacharr
    },
    scrollBottom(){
      let clientHeight = document.documentElement.clientHeight;//文档高度
      let scrollHeight = document.querySelector(".soon").scrollHeight;//div正常高度
      let scrollTop = document.querySelector(".soon").scrollTop;//div滚动条高度
      let bool = true;//设置开关避免重复请求
      if(scrollTop + clientHeight >= scrollHeight-100){
        if(bool == true){
          bool == false;
          this.count++;
          if(this.count == 2){
            console.log("aaa")
            this.$store.dispatch("getSoonList",this.count)
          }
        }
      }

    }
  },
  computed:{
    //得到每个时间
    getdate(){
      let arr = this.$store.state.soon.soonListArr
      let dateArr = []
      arr.forEach(element => {
        if (dateArr.indexOf(element.openTime) == -1){
          dateArr.push(element.openTime)
        }
      });
      return dateArr
    },
    
  },
  mounted(){
    document.querySelector(".soon").addEventListener('scroll', this.scrollBottom)
  },
}
</script>

<style>
.soon{
  flex: 1;
  overflow-y: auto;
}
.date{
  display: block;
  padding:10px 20px;
}
</style>
