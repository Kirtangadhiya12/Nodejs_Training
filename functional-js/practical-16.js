const getDependencies = (tree , result ) => {
    result = result || [];

    if(tree.hasOwnProperty("dependencies")){
        tree = tree.dependencies;
    }
    let keys = Object.keys(tree);
    keys.forEach(key => {
        if(tree[key].hasOwnProperty("version")){
            result.push(String(key+"@"+tree[key]["version"]));
        }
        if(tree[key].hasOwnProperty("dependencies")){
            getDependencies(tree[key]["dependencies"], result);
        }
    })

    return arraySort(result);

}

const arraySort = arr => {
    arr = [...new Set(arr)];
    return arr.sort((a,b) => {
        let tempA = a.toUpperCase();
        let tempB = b.toUpperCase();
        console.log(tempA + " " + tempB);
            if(tempA < tempB) {
                return -1;
            }if(tempA > tempB){
                return 1;
            }
            return 0;
    });

}
module.exports = getDependencies;