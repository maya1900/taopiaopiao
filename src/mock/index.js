const Mock = require("mockjs")
// 首页请求
Mock.mock("/data/hotlist/1","get",require("./data/comming.json"))
Mock.mock("/data/hotlist/2", "get", require("./data/comming1.json"))

Mock.mock("/data/soonlist/1", "get", require("./data/soon.json"))
Mock.mock("/data/soonlist/2", "get", require("./data/soon1.json"))

//影院请求
Mock.mock("/data/cinemalist/1","get",require("./data/xa_cinema.json"))
Mock.mock("/data/cinemalist/2", "get", require("./data/xa_cinema1.json"))

Mock.mock("/data/cinema_detail/cinemaid=4346", "get", require("./data/bona.json"))
Mock.mock("/data/cinema_detail/cinemaid=4348", "get", require("./data/bona1.json"))

//电影请求

Mock.mock("/data/movie/showid=1337617","get",require("./data/movie/giveyouaflower.json"))
Mock.mock("/data/comment/showid=1337617", "get", require("./data/movie/giveyou_comment.json"))
Mock.mock("/data/comment_other/showid=1337617", "get", require("./data/movie/giveyou_other.json"))
Mock.mock("/data/video/showid=1337617", "get", require("./data/movie/giveyou_getvideo.json"))
Mock.mock("/data/video_comment/showid=1337617", "get", require("./data/movie/giveyou_video_comment.json"))
Mock.mock("/data/movie_aritist/showid=1337617", "get", require("./data/movie/giveyou_artist.json"))
Mock.mock("/data/movie_trailer/showid=1337617", "get", require("./data/movie/giveyou_trailer.json"))


Mock.mock("/data/movie/showid=1312811", "get", require("./data/movie/dahongbao.json"))
Mock.mock("/data/comment/showid=1312811", "get", require("./data/movie/dahongbao_comment.json"))
Mock.mock("/data/comment_other/showid=1312811", "get", require("./data/movie/dahongbao_other.json"))
Mock.mock("/data/video/showid=1312811", "get", require("./data/movie/dahongbao_getvideo.json"))
Mock.mock("/data/video_comment/showid=1312811", "get", require("./data/movie/dahongbao_video_comment.json"))
Mock.mock("/data/movie_aritist/showid=1312811", "get", require("./data/movie/dahongbao_artist.json"))
Mock.mock("/data/movie_trailer/showid=1312811", "get", require("./data/movie/dahongbao_trailer.json"))

Mock.mock("/data/movie/showid=1275255", "get", require("./data/movie/splitbugget.json"))
Mock.mock("/data/comment/showid=1275255", "get", require("./data/movie/splitbugget_comment.json"))
Mock.mock("/data/comment_other/showid=1275255", "get", require("./data/movie/splitbugget_other.json"))
Mock.mock("/data/video/showid=1275255", "get", require("./data/movie/splitbugget_getvideo.json"))
Mock.mock("/data/video_comment/showid=1275255", "get", require("./data/movie/splitbugget_video_comment.json"))
Mock.mock("/data/movie_aritist/showid=1275255", "get", require("./data/movie/splitbugget_artist.json"))
Mock.mock("/data/movie_trailer/showid=1275255", "get", require("./data/movie/splitbugget_trailer.json"))
