const promise1 = new Promise((resolve, reject) => {
    reject(new Error('SECRET error'));
}).catch(err => console.log(err.message));

// 

let message;
let promise;

function randomBytes(n) {
  return (Math.random() * Math.pow(256, n) | 0).toString(16);
}

message =
  'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
  randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
  'terminated in 3 seconds.';

promise = Promise.reject(new Error(message));

promise.catch(function (err) {
  let i = 3;

  process.stderr.write(err.message);

  setTimeout(function boom() {
    process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
    if (!i) {
      process.stderr.write('\n..... . . . boom . . . .....\n');
    } else {
      setTimeout(boom, 1000);
    }
  }, 1000);
});