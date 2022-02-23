const parsePromised = new Promise((resolve, reject) => {
    resolve(process.argv[2]);
}).then(JSON.parse)
.catch(err => console.log(err.message));
