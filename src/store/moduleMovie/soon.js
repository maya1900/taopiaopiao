import { GET_MOVIE_LIST } from "api/getapi"

export const soon = {
  state:{
    soonListArr: [],
  },
  mutations:{
    getsoon(state, payload) {
      payload.forEach(element => {
        state.soonListArr.push(element)
      });
      console.log(state.soonListArr)
    },
    clearMovieArr(state) {
      state.soonListArr = []
    }
  },
  actions:{
    getSoonList(context,payload) {
      setTimeout(() => {
        GET_MOVIE_LIST("/data/soonlist/" + payload, "get").then((ok) => {
          // console.log(ok.data)
          context.commit("getsoon", ok.data)
        })
      }, 10)
    },
  }
}
