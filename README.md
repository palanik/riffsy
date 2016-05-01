# Riffsy API Wrapper

Client interface for accessing [Riffsy API](http://api.riffsy.com/).

[![NPM version](https://img.shields.io/npm/v/riffsy.svg?style=flat)](https://www.npmjs.org/package/riffsy)

## Installation

Install via [npm](https://www.npmjs.org/package/riffsy)

```bash
npm install riffsy --save
```

## Usage

Create a client object to connect to Riffsy API [endpoints](http://api.riffsy.com/).

```JS
var riffsy = require('riffsy');

var client = new riffsy(RIFFSY_API_KEY);

// Now you are ready to make API calls to Riffsy.
```

Provide parameters and a standard node callback function. 

API calls follow this syntax:

`client.action(queryString, callback);`

* `queryString` - API method parameters as key-value pairs.

### Examples

#### Get GIFs for a given tag or search terms.
```JS
client.search(
  {
    tag: 'lol cats'
  },
  function(err, data) {
    if (!err) {
      console.log(data);
    } 
  }
);
```

#### Get a list of popular or promoted tags and categories.
```JS
client.tags(
  {
    type: 'featured,explore'
  },
  function(err, data) {
    if (!err) {
      console.log(data);
    } 
  }
);
```

#### Get trending, popular, and promoted GIFs and Videos.
```JS
client.trending(
  {
    type: 'audiovideo'
  },
  function(err, data) {
    if (!err) {
      console.log(data);
    } 
  }
);
```

#### Get popular video clips ("Riffs").
```JS
client.riffs(function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```

## API Functions 

### `search`
Get GIFs for a given tag or search terms.

### `tags`
Get a list of popular or promoted tags and categories.

### `trending`
Get trending, popular, and promoted GIFs and Videos.

### `music`
Get popular video clips ("Riffs")

### `riffs`
Same as `music`

#### [reference](http://api.riffsy.com/)


## License

  [MIT](LICENSE)
