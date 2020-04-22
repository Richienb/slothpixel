# slothpixel [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/slothpixel/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/slothpixel)

A simplified interface for the Slothpixel API.

[![NPM Badge](https://nodei.co/npm/slothpixel.png)](https://npmjs.com/package/slothpixel)

## Install

```sh
npm install slothpixel
```

## Usage

```js
const slothpixel = require("slothpixel");

(async () => {
	const { uuid } = await slothpixel("players/Richienb");

	console.log(uuid);
	//=> "56da43a4088d4a7682b6dd431535015e"
})();
```

## API

### slothpixel(endpoint, options?)

#### endpoint

Type: `string`

The [API endpoint](https://docs.slothpixel.me) to call.

#### options

Type: `object`

The options to pass to the API.

### slothpixel.graphql(data)

Send a request to the Slothpixel Graphql API.

#### data

Type: `object`

The Graphql data to send. See https://graphql.org/learn/serving-over-http/#post-request.

```js
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

### slothpixel.SlothpixelError

Exposed for instanceof checks. This type of error is thrown when the API returns an error.
