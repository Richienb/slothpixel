/** An error thrown by the API. */
declare class SlothpixelError extends Error {
	message: string
}

declare const slothpixel: {
	SlothpixelError: typeof SlothpixelError

	/**
	A simplified interface for the Slothpixel API.
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
}

export = slothpixel
