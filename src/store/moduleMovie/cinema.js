import { GET_MOVIE_LIST} from "api/getapi";
export const cinema = {
  //使用map* 时需要开启命名空间
  namespaced:true,
  state:{
    cinemaList:[]
  },
  mutations:{
    getCinemaList(state,payload){
      payload.cinemas.forEach(element => {
        state.cinemaList.push(element)
      });
    }
  },
  actions:{
    getCinema(context,payload){
      setTimeout(() => {
        GET_MOVIE_LIST("/data/cinemalist/" + payload, "get").then((ok) => {
          console.log(ok.data)
          context.commit("getCinemaList", ok.data)
        })
      }, 10);
    }
  }
}
