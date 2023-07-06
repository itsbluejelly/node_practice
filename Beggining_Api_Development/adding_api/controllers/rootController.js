const {eventLogger} = require('../middleware/eventLogger')

const postController = (req, res, next) => {
    eventLogger(req.path, req.method, 'eventLogs.txt')
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