const fileOperation = require('./fileOperation');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const startoperation = () => {
// four operation add, delete, update, fetchOne
    switch(argv.operation){
        case "add": {
            console.log('add selected');
            fileOperation.addData(argv, (err) => {
                if(err) return console.log(err);
                console.log("Data added successfully");
            });
            break;
        }
        case "delete": {
            console.log('delete select');
            fileOperation.deleteData(argv, (err) => {
                if(err) return console.log(err);
                console.log(`delete operation successful on id ${argv.id}`);
            });
            break;
        }
        case "update": {
            console.log('update select');
            fileOperation.updateData(argv, (err) => {
                if(err) return console.log(err);
                console.log(`Details updated for id: ${argv.id} Succecfully!!`);
            });
            break;
        }
        case "fetchOne": {
            console.log('fetchOne select');
            fileOperation.fetchOne(argv, (err) => {
                if(err) return console.log(err);
            });
            break;
        }
        case "fetchAll": {
            console.log('fetch All select');
            fileOperation.fetchAll(argv, (err) => {
                if(err) return console.log(err);
                console.log("All data displayed successfully!");
            });
            break;
        }
        default: {
            if(Object.keys(argv).length === 2){
                console.log(" Oops! It looks like you didn't select any option.\n please select one of these options. \n --add  --delete  --update  --fetchOne  --fetchAll");
            }
        }
    }
}

(function main(){
    startoperation();
})();