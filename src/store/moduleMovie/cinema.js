import { GET_MOVIE_LIST} from "api/getapi";
import router from '@/router';
export const cinema = {
  //使用map* 时需要开启命名空间
  namespaced:true,
  state:{
    cinemaList:[],
    cinemaItem:{},
  },
  mutations:{
    getCinemaList(state,payload){
      payload.cinemas.forEach(element => {
        state.cinemaList.push(element)
      });
    },
    clearCinemaArr(state){
      state.cinemaList = []
      state.cinemaItem = {}
    },
    getCinemaItem(state,payload){
      state.cinemaItem = payload
    }
  },
  actions:{
    getCinema(context,payload){
      setTimeout(() => {
        GET_MOVIE_LIST("/data/cinemalist/" + payload, "get").then((ok) => {
          // console.log(ok.data)
          context.commit("getCinemaList", ok.data)
        })
      }, 10);
    },
    getCinemaDetail(context,payload){
      setTimeout(() => {
        GET_MOVIE_LIST("/data/cinema_detail/cinemaid=" + payload,"get").then((ok)=>{
          console.log(ok.data)
          context.commit("getCinemaItem",ok.data)
        }).catch(() => {
          router.push("/noData")
        })
      }, 10);
    }
  }
}
