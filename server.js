var bodyParser = require('body-parser');
var express = require('express');
var expressHandlebars = require('express-handlebars');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
mongoose.Promise = Promise;

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use(methodOverride('_method'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect('mongodb://heroku_k02drlv7:sn5p4kbfpp9c5los079kh89eeh@ds125831.mlab.com:25831/heroku_k02drlv7');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected');
    app.listen(port, function() {
        console.log('listening on ' + port);
    });
});

require('./controllers/news_controller.js')(app);
