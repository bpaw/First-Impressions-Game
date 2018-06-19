var express = require('express')
var router = express.Router();

/* GET a pair of images to load */
router.get('/', function(req, res, next) {
  console.log("TODO");
});

/* export so server side code can access the routes*/
module.exports = router;
