/** An error thrown by the API. */
declare class SlothpixelError extends Error {
	message: string
}

interface GraphqlData {
	query: string
	operationName?: string
	variables?: object
}

declare const slothpixel: {
	SlothpixelError: typeof SlothpixelError

	/**
	Send a request to the Slothpixel API.
	@param endpoint The [API endpoint](https://docs.slothpixel.me) to call.
	@param options The options to pass to the API.
	@example
	```
	const slothpixel = require("slothpixel");

	(async () => {
		const { uuid } = await slothpixel("players/Richienb");

		console.log(uuid);
		//=> "56da43a4088d4a7682b6dd431535015e"
	})();
	```
	*/
	<ReturnType = object | object[]>(endpoint: string, options?: Record<string, string | number | boolean>): Promise<ReturnType>

	/**
	Send a request to the Slothpixel Graphql API.
	@param data The graphql data to send.
	@example
	```
	const slothpixel = require("slothpixel");

	(async () => {
		const query = `{
			players {
				player(player_name: "Richienb") {
					uuid
				}
			}
		}`;

		const data = await slothpixel.graphql({ query });

		console.log(data.players.player.uuid)
		//=> "56da43a4088d4a7682b6dd431535015e"
	})();
	```
	*/
	graphql<ReturnType = object>(data: GraphqlData): Promise<ReturnType>
}

export = slothpixel
