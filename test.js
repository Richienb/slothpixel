const test = require("ava")
const slothpixel = require(".")

test("main", async t => {
	const { uuid } = await slothpixel("players/Richienb")
	t.is(uuid, "56da43a4088d4a7682b6dd431535015e")
})
