const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const cards = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false
});

server.get("/about", function(req, res) {
  const about = {
    avatar_url:
      "https://yt3.ggpht.com/a/AGF-l7_gRI0RdRC_VNg535o0C21ltP0eTFhi4rjRmw=s900-c-k-c0xffffffff-no-rj-mo",
    name: "RocketSeat",
    description:
      "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",

    links: [
      { name: "Instagram", url: "https://instagram.com/rocketseat_oficial" },
      { name: "GitHub", url: "https://github.com/rocketseat" },
      { name: "Facebook", url: "https://facebook.com/rocketseat" }
    ]
  };

  return res.render("about", { about });
});

server.get("/courses", function(req, res) {
  return res.render("courses", { items: cards });
});

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(4000, function() {
  console.log("Servidor Iniciado");
});
