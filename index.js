"use strict"
const hasha = require("hasha")

module.exports = input => {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`)
	}

	const stringToHash = [
		"blob ",
		Buffer.from(input).length,
		"\0",
		input
	].join("")

	return hasha(stringToHash, { algorithm: "sha1" })
}
