"use strict"
const hasha = require("hasha")

module.exports = input => {
	if (typeof input !== "string" && !Buffer.isBuffer(input)) {
		throw new TypeError(`Expected a string or buffer, got ${typeof input}`)
	}

	input = Buffer.from(input)

	return hasha([`blob ${input.length}\0`, input], { algorithm: "sha1" })
}
