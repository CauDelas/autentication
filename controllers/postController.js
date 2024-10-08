const Post = require('../models/postModel');

// Obter todos os posts do usuário autenticado
const getPosts = async (req, res) => {
    const posts = await Post.find({ user: req.user._id });
    res.json(posts);
};

// Criar novo post
const createPost = async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content, user: req.user._id });
    await post.save();
    res.status(201).json(post);
};

module.exports = { getPosts, createPost };
