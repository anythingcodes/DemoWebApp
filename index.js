var express = require('express');
<<<<<<< HEAD
var bodyParser = require('body-parser'); // TODO: what is this?
=======
var bodyParser = require('body-parser')
>>>>>>> origin/master
var mongoose = require('mongoose');

// Create the server
var app = express();

app.set('port', (process.env.PORT || 5000));

// Serving static files from public directory
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Use body parser to read request bodies
app.use(bodyParser());

// Connect to the database
mongoose.connect(process.env.MONGOLAB_URI);

<<<<<<< HEAD
// Check to make sure connection was successful
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log('we\'re connected!');
});

// Create the schema and model for messages
var messageSchema = mongoose.Schema({
    messageText: String
=======
// Checking to make sure connection was successful
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

// Create the Schema and Model for messages
var messageSchema = mongoose.Schema({
  messageText: String
>>>>>>> origin/master
});
var Message = mongoose.model('Message', messageSchema);

var getAndRenderPostedMessages = function(request, response) {
<<<<<<< HEAD
    Message.find(function (err, messages) {
      if (err) return console.log(err);
      var descendingMessages = messages.reverse();
      response.render('pages/index', { messages: descendingMessages});
    })
=======
  Message.find(function (err, messages) {
    if (err) return console.error(err);
    var descendingMessages = messages.reverse();
    response.render('pages/index', {messages: descendingMessages});
  })
>>>>>>> origin/master
}

// Set up our GET and POST requests

app.get('/', function(request, response) {
<<<<<<< HEAD
  // response.render('pages/index');
    getAndRenderPostedMessages(request, response);
});

app.post('/', function(request, response) {
   var newMessage = new Message({ messageText: request.body.message });
    newMessage.save(function(err, newMessage) {
      if(err) return console.error(err);
      getAndRenderPostedMessages(request, response);
    })
=======
  getAndRenderPostedMessages(request, response);
});

app.post('/', function (request, response) {
  var newMessage = new Message({ messageText: request.body.message });
  newMessage.save(function (err, newMessage) {
    if (err) return console.error(err);
    getAndRenderPostedMessages(request, response);
  });
>>>>>>> origin/master
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
