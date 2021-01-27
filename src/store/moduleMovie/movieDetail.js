import { GET_MOVIE_LIST } from "api/getapi"
import router from "@/router";
export const movieDetail = {
  namespaced:true,
  state:{
    movieObj:{},
    commentObj:{},
    commentOtObj:{},
    videoObj:{},
    videoCommentObj:{}
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
    },
    clearMovieObj(state){
      state.movieObj = {}
      state.commentObj = {}
      state.commentOtObj = {}
      state.videoObj = {}
      state.videoCommentObj = {}
    },
    getVideo(state,payload){
      state.videoObj = payload
    },
    getVideoComment(state,payload){
      state.videoCommentObj = payload
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
        }).catch(()=>{
          router.push("/noData")
        })
      }, 10);
    },
    getMovieVideo(context,id){
      setTimeout(() => {
        GET_MOVIE_LIST("/data/video/showid=" + id,"get").then((ok)=>{
          // console.log(ok.data)
          context.commit("getVideo",ok.data)
        })
      }, 10);
    },
    getMovieVideoComment(context, id) {
      setTimeout(() => {
        GET_MOVIE_LIST("/data/video_comment/showid=" + id, "get").then((ok) => {
          console.log(ok.data)
          context.commit("getVideoComment", ok.data)
        })
      }, 10);
    }
  }
}
