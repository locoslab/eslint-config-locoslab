// basically just check that the config can be correctly parsed by eslint

function is123(s) {
	return s === '123'
}

let a = '123'
let b = 1
if (is123(a)) {
	b += 2
}
if (b === 3)
	a = '1'
