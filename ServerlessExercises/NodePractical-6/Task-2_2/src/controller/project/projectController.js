const fs = require('fs');

module.exports.getProject = async (event) => {
    let data = fs.readFileSync('./projects.json');
    console.log(JSON.parse(data));
    data = JSON.parse(data);
    return ({
        statusCode: 200,
        body: JSON.stringify(data)
    });
}


module.exports.addProject = async (event) => {

    const data = fs.readFileSync('./projects.json');
    const {
        ID,
        title,
        description


    } = JSON.parse(event.body);
    const Project = {
        ID,
        title,
        description
    }

    const data1 = JSON.parse(data);

    data1.push(Project);
    fs.writeFileSync('./projects.json', JSON.stringify(data1, null, 4), 'utf-8');

    return {
        message: "Project Added successfully"
    }
}

module.exports.updateProject = async (event) => {

    const { ID } = event.pathParameters;

    const {
        title,
        description
    } = JSON.parse(event.body);

    try {

        let data = JSON.parse(fs.readFileSync("./projects.json", "utf-8"));

        const project = data.find(i => i.ID == ID)

        if (project) {

            let newProject = data.map(i => {

                if (i.ID == ID) {

                    i.title = title || i.title;

                    i.description = description || i.description;

                }

                return i;
            });

            newProject = JSON.stringify(newProject, null, 4);

            fs.writeFileSync("./projects.json", newProject);

            return {
                message: "Project Updated successfully."
            }
        } else {

            return {
                message: 'Project not Found'
            }

        }

    } catch (error) {
        return {
            message: 'project is not updated'
        }
    }

}

module.exports.deleteProject = async (event) => {

    const { ID } = event.pathParameters;

    try {

        const data = JSON.parse(fs.readFileSync("./projects.json", "utf-8"));

        const project = data.find(i => i.ID == ID)

        if (project) {

            let newProject = data.filter(i => {

                return i.ID != ID;

            });

            newProject = JSON.stringify(newProject, null, 4);
            fs.writeFileSync("./projects.json", newProject);

            return {
                message: "Project deleted successfully."
            }

        } else {

            return { message: 'project Not Found' };

        }

    } catch (error) {
        return {
            message: 'project is not deleted'
        }

    }

}


