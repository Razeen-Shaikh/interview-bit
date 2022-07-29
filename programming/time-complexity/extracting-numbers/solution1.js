module.exports = {
	//param A : string
	//return a long integers
	solve: function (A) {
		let sum = 0
		let num = ""
		for (let i = 0; i < A.length; i++) {
			if (A[i] >= String.fromCharCode(48) && A[i] <= String.fromCharCode(57)) {
				num += A[i]
			} else {
				sum += Number.parseInt(num ? num : 0)
				num = ""
			}
			if (i === A.length - 1) {
				sum += Number.parseInt(num ? num : 0)
			}
		}
		return sum
	}
};
