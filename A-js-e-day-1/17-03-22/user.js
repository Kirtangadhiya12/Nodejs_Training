const express = require('express')
const router = express.Router()

// router.use((req, res, next) => {
//   console.log("this is kirtan data")
//   next()
// })

router.get('/', (req, res) => {
  res.send('Kirtan home page')
})

router.get('/about', (req, res) => {
  res.send('About kirtan')
})

module.exports = router
