const Mock = require("mockjs")
Mock.mock("/data/hotlist/1","get",require("./data/comming.json"))
Mock.mock("/data/hotlist/2", "get", require("./data/comming1.json"))

Mock.mock("/data/soonlist/1", "get", require("./data/soon.json"))
Mock.mock("/data/soonlist/2", "get", require("./data/soon1.json"))

Mock.mock("/data/cinemalist/1","get",require("./data/xa_cinema.json"))
Mock.mock("/data/cinemalist/2", "get", require("./data/xa_cinema1.json"))
