var express = require('express');
const { route } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/server-performance", function(req,res,next) {
  
})

module.exports = router;
