const {eventLogger} = require('../middleware/eventLogger')
const ArticleModel = require('../model/Article')

function getController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')
    
    res.json({
        titles: {
            firstTitle: "First Post",
            secondTitle: "Second Post"
        }
    })
    
    next()
}

async function postController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')
    const article = new ArticleModel(req.body)

    try{
        const savedArticle = await article.save()
        eventLogger("save to articles collection successful", savedArticle, 'dataBaseLogs.txt')
        res.json({post: savedArticle})
    }catch(error){
        eventLogger(error.name, error.message, 'errorLogs.txt')
        
        res.status(400).json({
            error:{
                [error.name]:error.message
            }
        })
    }

    next()
}

module.exports = {
    getController,
    postController
}