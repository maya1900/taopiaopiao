import service from "util/service.js";

export function GET_MOVIE_LIST(url,method){
  return new Promise((resolve,reject)=>{
    service.request({
      url,
      method
    }).then((ok)=>{
      resolve(ok)
    }).catch((err)=>{
      reject(err)
    })
  })
}
