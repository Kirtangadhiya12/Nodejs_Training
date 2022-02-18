const data = require('./Practical - 3.1.json');

const techArray = (arrOfObj) => {
    const result = {};
    arrOfObj.forEach(elem => {
        const tech = elem.technologyAssigned;
        if(Object.prototype.hasOwnProperty.call(result, tech)){
            result[tech].push(elem);
        }else{
            result[tech] = [elem];
        }
    });
    return result;
}

let result = techArray(data);
console.log(result);
