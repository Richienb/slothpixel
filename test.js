const test = require("ava")
const slothpixel = require(".")

test("main", async t => {
	const { uuid } = await slothpixel("players/Richienb")
	t.is(uuid, "56da43a4088d4a7682b6dd431535015e")
})

test("graphql", async t => {
	const query = `{
		players {
			player(player_name: "Richienb") {
				uuid
			}
		}
	}`

	const data = await slothpixel.graphql({ query })

	t.deepEqual(data, { players: { player: { uuid: "56da43a4088d4a7682b6dd431535015e" } } })
})
