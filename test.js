const test = require("ava")
const gitHashObject = require(".")

test("main", t => {
	const cases = [
		["Hello World", "5e1c309dae7f45e0f39b1bf3ac3cd9db12e7d689"],
		["你好世界", "4f69915aea5eb020e5bd76d69276a8e8e8dbd223"]
	]

	for (const [question, answer] of cases) {
		t.is(gitHashObject(question), answer)
	}
})
