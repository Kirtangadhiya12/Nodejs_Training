const loadUsers = (userIds, load, done) => {
        var users = []
        userIds.forEach((elem, index) => load(elem, ()=> users[index] = elem));
        return users
        }
        
        module.exports = loadUsers


        // await userIds.forEach(elem => users.push(load(elem)));        
        // return users