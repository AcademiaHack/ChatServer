var app = require('http').createServer(function () {

});
var io = require('socket.io')(app);

var Chat = require('./chat');

var chat = new Chat();

io.on('connection', function (socket) {

	console.log('user connected');
	socket.on('join', function (user) {
		user = chat.addUser(user);				
		socket.emit('joined', user);
	});

	socket.on('message', function (message) {
		message = chat.addMessage(message);

		var username = "Anonymous";
		if (message.hasOwnProperty('user')) {
			if (message.user.hasOwnProperty('username')) {
				username = message.user.username;
			}
		}

		var address = socket.handshake.address;
		console.log(address+ '-' +username + ' < ' + message.message);
		socket.emit('received', message);
		io.emit('sms', message);
	});

  socket.on('disconnect', function () {

  });
});



io.listen(3000);

