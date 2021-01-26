import { GET_MOVIE_LIST } from "api/getapi"

export const movieDetail = {
  namespaced:true,
  state:{
    movieObj:{},
    commentObj:{},
    commentOtObj:{}
  },
  mutations:{
    getMovie(state,payload){
      state.movieObj = payload
    },
    getComment(state,payload){
      state.commentObj = payload
    },
    getCommentOther(state,payload){
      state.commentOtObj = payload
    }
  },
  actions:{
    getMovieDetail(context,id){
      setTimeout(() => {
        GET_MOVIE_LIST("/data/movie/showid=" + id, "get").then((ok) => {
          console.log(ok.data)
          context.commit("getMovie", ok.data)
        })
      }, 10);
    },
    getMovieComment(context,id){
      setTimeout(() => {
        GET_MOVIE_LIST("/data/comment/showid=" + id,"get").then((ok)=>{
          // console.log(ok.data)
          context.commit("getComment",ok.data)
        })
      }, 10);
    },
    getMovieCommentOther(context,id){
      setTimeout(() => {
        GET_MOVIE_LIST("/data/comment_other/showid=" + id,"get").then((ok)=>{
          // console.log(ok.data)
          context.commit("getCommentOther",ok.data)
        })
      }, 10);
    }
  }
}
