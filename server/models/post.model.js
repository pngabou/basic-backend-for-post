const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true,
            maxLength:200,
        },
        content:{
            type:String,
            required:true,
            maxLength:2000,
        },
        author:{
            type:String,
            required:true,
            maxLength:200,
        }
    },
    {
        timestamp:true
    }
);

module.exports = mongoose.model("post",PostSchema);