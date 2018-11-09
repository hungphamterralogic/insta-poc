## Start program

```
git clone https://github.com/hungphamterralogic/insta-poc.git
cd $_
npm install
npm start
```

## API

Note: for all success results, there will be a **_stat_** property with value of _"OK"_ in the response json.

### /api/getHashtaggedItemShortcodes

This is used to get list of shortcodes (a.k.a. items ids) from a hashtag

Params needed:

- _hashtag_: must be a truthy string
- _quantity_: must be a number and greater than 0

Example:

```
localhost:3000/api/getHashtaggedItemShortcodes?hashtag=yolo&quantity=200
```

Note: this hasn't implemented quantity part, so the result will return all items shortcodes from the first fetch of instagram page

### /api/getItemInfos

This is used to get infos of an item from shortcode

Params needed:

- _shortcode_: must be a truthy string

Example:

```
localhost:3000/api/getItemInfos?shortcode=Bp7zFbehEPz
```

Note: right now, it will just get uploader's username, will add more infos if requirement comes
