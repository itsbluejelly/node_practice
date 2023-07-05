const {eventLogger} = require('../middleware/eventLogger')

const postController = (req, res, next) => {
    eventLogger(req, 'eventLogs.txt')
    res.json({
        titles: {
            firstTitle: "First Post",
            secondTitle: "Second Post"
        }
    })
    next()
}

module.exports = {
    postController
}