const fs = require('fs');

module.exports.getTask = async (event) => {
    let data = fs.readFileSync('./tasks.json');
    console.log(JSON.parse(data));
    data = JSON.parse(data);
    return ({
        statusCode: 200,
        body: JSON.stringify(data)
    });
}

module.exports.addTask = async (event) => {

    const data = fs.readFileSync('./tasks.json');
    const {
        ID,
        title,
        description,
        projectID


    } = JSON.parse(event.body);
    const Project = {
        ID,
        title,
        description,
        projectID
    }

    const data1 = JSON.parse(data);
    data1.push(Project);
    fs.writeFile('./tasks.json', JSON.stringify(data1, null, 4), 'utf-8')

    return ({
        message: "Task Added successfully"
    })
}


module.exports.updateTask = async (event) => {

    const { ID } = event.pathParameters;

    const {
        title,
        description,
        projectID

    } = JSON.parse(event.body);

    try {

        let data = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));

        const task = data.find(i => i.ID == ID)

        if (task) {

            let newTask = data.map(i => {

                if (i.ID == ID) {

                    i.title = title || i.title;

                    i.description = description || i.description;

                    i.projectID = projectID || i.projectID;

                }

                return i;

            });

            newTask = JSON.stringify(newTask, null, 4);

            fs.writeFileSync("./tasks.json", newTask);

            return { message: "Task Updated successfully." }

        } else {

            return { message: 'Task not Found' };

        }

    } catch (error) {
        return {
            message: 'task is not updated'
        }

    }

}

module.exports.deleteTask = async (event) => {

    const { ID } = event.pathParameters;

    try {

        const data = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));

        const task = data.find(i => i.ID == ID)

        if (task) {

            let newTask = data.filter(i => {

                return i.ID != ID;

            });

            newTask = JSON.stringify(newTask, null, 4);
            fs.writeFileSync("./tasks.json", newTask);

            return { message: "Task deleted successfully." }

        } else {

            return { message: 'Task Not Found' };

        }

    } catch (error) {
        return {
            message: 'Task is  not Deleted'
        }

    }

}




