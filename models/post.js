const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
    title:String,
    images:[{
        url: String,
        filename: String
    }],
    community:
    {
        type:mongoose.Schema.Types.ObjectId,
    ref:'Community'
    },
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
    
});

module.exports=mongoose.model('Post',PostSchema);
