const uniqueNameArray = (arrOfNames , fullName) => {
    if(!isValidName(fullName)){
        console.log("Enter valid name.");
        return ;
    }
    if(arrOfNames.some(elem => elem === fullName)){
        console.log("Name already exist in array");
        return;
    }
    arrOfNames.push(fullName);
    return arrOfNames;
}
const isValidName = name => {
    const regExp = /^[A-Za-z\p{L}]+[\s]{1}[-A-Za-z\p{L}]+['\-]{0,1}[-A-Za-z\p{L}]+$/;
    return regExp.test(name);
}

arrOfNames = ["krushit dudhat", "Silvana Koch-Mehrin", "Peter Müller", "François Hollande", "Patrick O'Brian", "kevin heart"];
console.log(uniqueNameArray(arrOfNames,"Patr'ick O'Brian"));
console.log(uniqueNameArray(arrOfNames,"Patrick O'Brian"));
console.log(uniqueNameArray(arrOfNames,"maya thakur"));