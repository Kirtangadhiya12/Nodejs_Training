const AWS = require('aws-sdk')




AWS.config.update({

    region: 'localhost',

    endpoint: 'http://localhost:8000'

})




module.exports = AWS