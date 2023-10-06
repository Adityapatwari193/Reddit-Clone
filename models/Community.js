const mongoose=require('mongoose');
const CommunitySchema=new mongoose.Schema({
    title:String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Post'
        },
    ]
});

module.exports=mongoose.model("Community",CommunitySchema);