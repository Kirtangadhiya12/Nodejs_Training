module.exports = (namespace) => {
    return  console.log.bind(this, namespace);
}

// bind