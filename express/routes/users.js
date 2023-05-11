var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    errno: 0,
    msg: 'shoudaole'
  })
});

module.exports = router;
