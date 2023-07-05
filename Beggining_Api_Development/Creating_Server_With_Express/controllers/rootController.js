const postController = (req, res, next) => {
    res.send("Hello World From Node js")
    next()
}

module.exports = {
    postController
}