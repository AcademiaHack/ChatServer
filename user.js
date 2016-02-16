function User(id, data) {
	for (var key in data) {
		this[key] = data[key];
	}
	this.id = id;
}

module.exports = User;