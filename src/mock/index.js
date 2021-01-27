const Mock = require("mockjs")
Mock.mock("/data/hotlist/1","get",require("./data/comming.json"))
Mock.mock("/data/hotlist/2", "get", require("./data/comming1.json"))

Mock.mock("/data/soonlist/1", "get", require("./data/soon.json"))
Mock.mock("/data/soonlist/2", "get", require("./data/soon1.json"))

Mock.mock("/data/cinemalist/1","get",require("./data/xa_cinema.json"))
Mock.mock("/data/cinemalist/2", "get", require("./data/xa_cinema1.json"))

Mock.mock("/data/movie/showid=1337617","get",require("./data/giveyouaflower.json"))
Mock.mock("/data/comment/showid=1337617", "get", require("./data/giveyou_comment.json"))
Mock.mock("/data/comment_other/showid=1337617","get",require("./data/giveyou_other.json"))


Mock.mock("/data/movie/showid=1312811", "get", require("./data/dahongbao.json"))
Mock.mock("/data/comment/showid=1312811", "get", require("./data/dahongbao_comment.json"))
Mock.mock("/data/comment_other/showid=1312811", "get", require("./data/dahongbao_other.json"))

Mock.mock("/data/video/showid=1337617","get",require("./data/giveyou_getvideo.json"))
Mock.mock("/data/video_comment/showid=1337617","get",require("./data/giveyou_video_comment.json"))

Mock.mock("/data/video/showid=1312811", "get", require("./data/dahongbao_getvideo.json"))
Mock.mock("/data/video_comment/showid=1312811", "get", require("./data/dahongbao_video_comment.json"))
