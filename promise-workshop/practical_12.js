const HTTP = require('q-io/http');

HTTP.read("http://localhost:1337")
.then(function (json) {
    console.log(JSON.parse(json));
})
.catch(console.error);