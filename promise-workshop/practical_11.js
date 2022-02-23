const all = (p1, p2) => {
    return new Promise(function (fulfill, reject) {
    let counter = 0;
    let out = [];

    p1.then( (val) => {
        out[0] = val;
        counter++;

        if (counter >= 2) {
        fulfill(out);
        }
    });

    p2.then((val) => {
        out[1] = val;
        counter++;

        if (counter >= 2) {
        fulfill(out);
        }
    });
    });
}

all(getPromise1(), getPromise2())
.then(console.log);