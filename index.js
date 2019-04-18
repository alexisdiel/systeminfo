var path = require("path");
var fs = require("fs");
var express = require("express");
var compression = require("compression");
var app = express();
var morgan = require("morgan");
var router = express.Router();

app.disable("x-powered-by");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set("json spaces", 2);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("short"));

app.listen(3000);

router.all("/", function(req, res, next) {
  if (req.query.v) version = req.query.v;
  next();
});

var si = require("systeminformation");
router.get("/:file?", async (req, res) => {
  if (req.params.file) {
    let data;
    try {
      data = require(`./${req.params.file}.js`); // do stuff
      res.header("Content-Type", "application/json");
      res.send(data);
    } catch (ex) {
      res.sendStatus(404);
    }
  } else {
    si.getStaticData(function(data) {
      //data = data.reduce((p,c) => p.concat(c.serialNum), []);
      res.send(data);
    });
  }
});

app.use(router);
