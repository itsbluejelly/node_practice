const {eventLogger} = require('../middleware/eventLogger')

const postController = (req, res, next) => {
    eventLogger(req, 'eventLogs.txt')
    res.send("Hello World From Node js")
    next()
}

module.exports = {
    postController
}