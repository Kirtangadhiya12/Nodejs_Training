const getShortMessages = (messages) => {
    return messages.reduce((aElem,cElem) => [...aElem,cElem['message']] , []).filter(elem => elem.length < 50);
}

module.exports = getShortMessages;