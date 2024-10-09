const postService = require('../services/postService')

function getAllPosts(req, res) {
    const context = postService.getAllPosts()
    res.render('posts', context)
};

function getPostById(req, res) {
    const id = req.params.id
    const context = postService.getPostById(id)
    if (id <= postService.posts.length && id >= 1){
        res.render("post", context)
      } else if (id == "create"){
        res.render("post_create")
      } else {
        res.send("This page does not exist")
      };
};

function createPost(req, res) {
    const data = req.body
    postService.createPost(data)
    res.send('send');
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
}