"use strict"
const hasha = require("hasha")

module.exports = input => {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`)
	}

	return hasha(`blob ${Buffer.from(input).length}\0${input}`, { algorithm: "sha1" })
}
