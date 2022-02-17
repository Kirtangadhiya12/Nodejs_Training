'use strict'
const fs = require('fs')
const cont = fs.readFileSync(process.argv[2])
const cont1=cont.toString().split('\n').length - 1
console.log(cont1)
