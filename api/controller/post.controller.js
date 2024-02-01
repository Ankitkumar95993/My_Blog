const { errorHandler } = require("../utils/error");
const Post = require('../models/post.model');

exports.create=async(req,res,next)=>{
        if(!req.user.isAdmin){
            return next(errorHandler(403,'you are not allowed to create the post'));
        }
  
        if(!req.body.title || !req.body.content ){
            return next(errorHandler(400, 'please provide all required fields'));
        }

        const slug = req.body.title
        .split(' ')
        .join('-')
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/,'');

        const newPost =  new Post({
            ...req.body,
            slug,
            userId:req.user.id
 
        });

        try{
           const savedPost =  await newPost.save();
           res.status(201).json(savedPost);

        }catch(error){
            next(error);

        }
}