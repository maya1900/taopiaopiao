

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
    path: "/moiveDetail",
    name: "MoiveDetail",
    component: () => import('views/moiveDetail')
  }, {
    path: "/user",
    name: "Home",
    component: () => import('views/user')
  }, {
    path: "/",
    redirect:"/home"
  },{
    path:"*",
    name: "No",
    component: () => import('views/no')
  }
]
