<template>
  <div class="cinema">
    <Loading v-if="cinemaList == {}"/>
    <CinemaTopBar />
    <main else>
      <CinemaList
        v-for="(v, i) in cinemaList"
        :key="i"
        :title="v.cinemaName"
        :address="v.address"
        :support="v.supportList"
        :minprice="v.minPrice"
        :oriprice="v.oriPrice" @click.native="intoDetail(v.cinemaId)"
      />
    </main>
    <BottomBar />
  </div>
</template>

<script>
import { mapState, mapActions,mapMutations } from "vuex";
import CinemaTopBar from "com/cinemaTopBar";
import CinemaList from "com/cinemaList";
export default {
  mounted() {
    this.getCinema(1);
    document
      .querySelector("main")
      .addEventListener("scroll", this.scrollBottom);
  },
  methods: {
    //将this.getCinema()映射成this.$store.dispatch()
    ...mapActions("cinema", ["getCinema"]),
    ...mapMutations("cinema",["clearCinemaArr"]),

    scrollBottom() {
      let clientHeight = document.documentElement.clientHeight; //文档高度
      let scrollHeight = document.querySelector("main").scrollHeight; //div正常高度
      let scrollTop = document.querySelector("main").scrollTop; //div滚动条高度
      let bool = true; //设置开关避免重复请求
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        if (bool == true) {
          bool == false;
          this.count++;
          if (this.count == 2) {
            // console.log("aaa")
            this.getCinema(this.count);
          }
        }
      }
    },

    intoDetail(val){
      this.$router.push({path:"/cinemaDetail",query:{cinemaid:val}})
    }
  },
  components: {
    CinemaTopBar,
    CinemaList
  },
  computed: {
    ...mapState("cinema", ["cinemaList"]),
  },
  data() {
    return {
      count: 1,
    };
  },
  beforeRouteEnter(to,from,next){
    // console.log('aaa')
    next(vm=>{
      vm.clearCinemaArr()
    })
  }
};
</script>

<style scoped>
.cinema {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  overflow-y: auto;
}
</style>
