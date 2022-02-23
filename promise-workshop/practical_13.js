const HTTP = require('q-io/http');

HTTP.read({
        url:'http://localhost:7000',
        method: "GET"
    })
.then(result => {
    result = result.toString();
    return HTTP.read({
        url: `http://localhost:7001/${result}`,
        method: "GET"
    })
})
.then(result => {
    return JSON.parse(result.toString());
})
.then(console.log)
.catch(err => console.log(err.message));    