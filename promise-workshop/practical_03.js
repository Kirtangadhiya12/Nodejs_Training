const promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
});

promise.then(null, (error) => console.log(error.message));