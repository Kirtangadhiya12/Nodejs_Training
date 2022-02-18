const sprinters = [
    {
"name": "James",
"timeToReachFinishLine": 9.10
},
{
"name": "George",
"timeToReachFinishLine": 9.11
},
{
"name": "Robert",
"timeToReachFinishLine": 9.25
},
{
"name": "Mary",
"timeToReachFinishLine": 9.13
},
{
"name": "Patricia",
"timeToReachFinishLine": 9.14
},
{
"name": "Christopher",
"timeToReachFinishLine": 10.0
},
{
"name": "Thomas",
"timeToReachFinishLine": 11.0
},
{
"name": "Anthony",
"timeToReachFinishLine": 9.0
},
{
"name": "Timothy",
"timeToReachFinishLine": 19.0
},
{
"name": "Samuel",
"timeToReachFinishLine": 10.10
}];

const sortArray = (arr) => {
    return arr.sort((a,b) => {
        timeA = a["timeToReachFinishLine"];
        timeB = b["timeToReachFinishLine"];
        if(timeA < timeB){
            return -1;
        } else if(timeA > timeB) {
            return 1;
        }
        return 0;
    })
}  

const ranking = (arr) => {
    arr = sortArray(arr).reverse();
    const [winner, firstRunnerUp, secondRunnerUp, ...justParticipants] = arr;
    console.log('winner: '+JSON.stringify(winner) 
    + '\nfirstRunnerUp: ' + JSON.stringify(firstRunnerUp) 
    + '\nsecondRunnerUp: '+JSON.stringify(secondRunnerUp) 
    + '\njustParticipants: ' + JSON.stringify(justParticipants));
}

console.log(sortArray(sprinters));
// expected results
/*
[
    { name: 'Anthony', timeToReachFinishLine: 9 },
    { name: 'James', timeToReachFinishLine: 9.1 },
    { name: 'George', timeToReachFinishLine: 9.11 },
    { name: 'Mary', timeToReachFinishLine: 9.13 },
    { name: 'Patricia', timeToReachFinishLine: 9.14 },
    { name: 'Robert', timeToReachFinishLine: 9.25 },
    { name: 'Christopher', timeToReachFinishLine: 10 },
    { name: 'Samuel', timeToReachFinishLine: 10.1 },
    { name: 'Thomas', timeToReachFinishLine: 11 },
    { name: 'Timothy', timeToReachFinishLine: 19 }
]
*/

ranking(sprinters);
// Expected results:
/* */