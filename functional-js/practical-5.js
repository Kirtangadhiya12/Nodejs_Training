const checkUsersValid = goodUsers => {
    return allUsersValid = (submittedUsers) => {
        return submittedUsers.every(elem => {
            return goodUsers.some(item => item["id"] === elem["id"]);
        });
    }
}
module.exports = checkUsersValid;
