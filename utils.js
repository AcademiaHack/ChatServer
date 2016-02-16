module.exports = {
	findObjectInArray: function (value, key, array) {
		var found;

		for(var i = 0; i<array.length; i++) {
			if (array[i][key] === value) {
				found = array[i];
				break;
			}
		}
		return found;
	}
};
