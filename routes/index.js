var express = require('express');
const { route } = require('../app');
const ServerStats = require('../utils/server');
const SocketConnector = require('../utils/socket');
var router = express.Router();

const server_stats = new ServerStats();
var socket = null;

/* GET home page. */
router.get('/', function(req, res, next) {
  server_stats.getCPUUsage();
  res.render('index', { title: 'Express' });
});

router.post("/start-connection", function(req, res, next) {

  try {
    const ip = req.body.ip;
    const port = req.body.port;
    console.log(req.body)
  
    if (!socket) {
      socket = new SocketConnector(ip, port)
    }
    // console.log(socket)
    res.status(200).json({
      success: true,
      msg: ""
    })
  } catch (error) {
    console.log(error)
    res.status(200).json({
      success: true,
      msg: ""
    })
  }
})

router.get("/server-performance", function(req,res,next) {

})

module.exports = router;
