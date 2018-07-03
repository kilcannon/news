var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
