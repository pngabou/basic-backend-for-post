const postModel = require("../models/post.model");

module.exports.allPosts = (req,res) => {
    postModel.find((err,docs) => {
        if (!err) return res.status(200).send(docs)
        else return res.status(400).send("Error to get data :" + err)
    }).sort({createdAt: -1});

}

module.exports.addPost = async (req,res) => {
    const newPost = new postModel(
        {
            title : req.body.title,
            content : req.body.content,
            author : req.body.author,
        })
    console.log('Received request:', req.body); // Check if the request body contains the expected data

// Before saving the post
    console.log('About to save post:', newPost);

    try {
        const post = await newPost.save();
        console.log('Saved post:', post); // Log the saved post for verification
        return res.status(201).json(post);
    } catch (err) {
        console.error('Error while saving post:', err); // Log the error for debugging
        return res.status(401).json({ message: 'Error while saving the post' });
    }

}