var User = require('./user');
var Message = require('./message');
var utils = require('./utils');

function Chat() {
	this.users = [];
	this.messages = [];
}

Chat.prototype.addUser = function (user) {
	user = new User(this.users.length, user);
	this.users.push(user);

	return user;
};

Chat.prototype.addMessage = function (message) {
	message = new Message(message);
	if (message.hasOwnProperty('userId')) {
		message.user = utils.findObjectInArray(
			message.userId, 
			'id',
			this.users
		);
	}
	this.messages.push(message);

	return message;
};

module.exports = Chat;