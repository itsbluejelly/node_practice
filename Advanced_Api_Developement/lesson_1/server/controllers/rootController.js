const {eventLogger} = require('../middleware/eventLogger')
const ArticleModel = require('../model/Article')

async function getController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')

    try{
        const savedArticles = await ArticleModel.find().select("title body id")
        eventLogger("list of saved documents from article collection found", savedArticles, 'dataBaseLogs.txt')
        res.json({savedPosts: savedArticles})
    }catch(error){
        eventLogger(error.name, error.message, 'errorLogs.txt')
        res.status(404).json({
            error:{
                [error.name]:error.message
            }
        })
    }
    
    next()
}

async function postController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')
    const article = new ArticleModel(req.body)

    try{
        const savedArticle = await article.save()
        eventLogger("save to articles collection successful", savedArticle, 'dataBaseLogs.txt')
        res.json({post: savedArticle}).status(201)
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