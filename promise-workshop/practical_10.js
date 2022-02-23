const iterate = (num) => {
    console.log(num);
    return num + 1;
}

const alwaysThrows = () => {
    throw new Error('OH NOES');
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch((error)=> console.log(error.message));