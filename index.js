"use strict"

const ky = require("ky-universal")

class SlothpixelError extends Error {
	constructor(message = "", ...args) {
		super(message, ...args)
		this.message = message
	}
}

module.exports = async (endpoint, options) => {
	if (typeof endpoint !== "string") {
		throw new TypeError("An endpoint must be provided!")
	}

	const result = await ky(endpoint, {
		prefixUrl: "https://api.slothpixel.me/api/",
		searchParams: options,
		throwHttpErrors: false
	})
	const data = await result.json()

	if (data.error) {
		throw new SlothpixelError(data.error)
	}

	return data
}

module.exports.SlothpixelError = SlothpixelError
