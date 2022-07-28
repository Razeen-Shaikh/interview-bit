module.exports = {
	//param A : array of strings
	//return an integer
	solve: function (A) {
		let joined = A.join("")
		for (let i = 97; i <= 122; i++) {
			if (!joined.includes(String.fromCharCode(i))) {
				return 0
			}
		}
		return 1
	}
};