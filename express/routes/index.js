var express = require('express');
var router = express.Router();

router.get('/get-test', async (req, res, next) => {
  const { name, age } = req.query
  res.json({
    errno: 0,
    name,
    age
  })
})

router.post('/post-test', async (req, res, next) => {
  console.log(req.body)
  const { name, age } = req.body
  res.json({
    errno: 0,
    name,
    age
  })
})

router.get('/api/color', async (req, res, next) => {
  res.json([
    "192, 134, 163",
    "191, 92, 177",
    "233, 40, 171",
    "177, 243, 141",
    "253, 27, 240",
    "137, 91, 127",
    "241, 240, 85",
    "129, 133, 240",
    "26, 86, 235",
    "93, 80, 225"
  ])
})

module.exports = router;
