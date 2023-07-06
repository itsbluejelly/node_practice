const {eventLogger} = require('../middleware/eventLogger')

function postController(req, res, next){
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