const test = require("ava")
const gitHashObject = require(".")

test("main", t => {
	t.is(gitHashObject("Hello World"), "5e1c309dae7f45e0f39b1bf3ac3cd9db12e7d689")
})
