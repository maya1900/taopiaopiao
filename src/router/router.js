

export let routerList = [
  {
    path:"/home",
    name:"Home",
    component:() =>import('views/home')
  }, {
    path: "/cinema",
    name: "Cinema",
    component: () => import('views/cinema')
  }, {
    path: "/cinemaDetail",
    name: "CinemaDetail",
    component: () => import('views/cinemaDetail')
  }, {
    path: "/login",
    name: "Login",
    component: () => import('views/login')
  }, {
    path: "/movieDetail",
    name: "MovieDetail",
    component: () => import('views/movieDetail')
  }, {
    path: "/user",
    name: "User",
    component: () => import('views/user')
  }, {
    path: "/noData",
    name: "NoData",
    component: () => import('views/noData')
  },{
    path: "/",
    redirect:"/home"
  },{
    path:"*",
    name: "No",
    component: () => import('views/no')
  }
]
