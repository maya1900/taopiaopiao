import { GET_MOVIE_LIST } from "api/getapi"
export const comming = {
  state:{
    hotListArr:[]
  },
  mutations:{
    gethot(state, payload) {
      payload.forEach(element => {
        // console.log("aaa")
        if(state.hotListArr.indexOf(element) == -1){
          state.hotListArr.push(element)
        }
        
      });
    },
    clearMovieArr(state){
      state.hotListArr=[]
    }
  },
  actions:{
    getHotList(context,payload) {
      setTimeout(() => {
        GET_MOVIE_LIST("/data/hotlist/" + payload, "get").then((ok) => {
          // console.log(ok.data)
          context.commit("gethot", ok.data)
        }).catch((err)=>{
          return err
        })
      }, 10)
    },
  }
}
