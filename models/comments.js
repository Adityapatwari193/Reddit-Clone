const mongoose=require('mongoose');

const CommentSchema=new mongoose.Schema({
    title:String
});

module.exports=mongoose.model('Comment',CommentSchema);