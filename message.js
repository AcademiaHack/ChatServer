function Message(data) {
	for (var key in data) {
		this[key] = data[key];
	}
}

module.exports = Message;