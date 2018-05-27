# @unction/get


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> KeyType => mixed => ValueType

Returns the value of a specific key on an iterable. If no key is found it returns undefined. If the second argument isn't an iterable we return undefined, to allow for graceful failure.

``` javascript
get("aaa")({aaa: "1"}) // "1"
get("bbb")({aaa: "1"}) // undefined
get("bbb")(undefined) // undefined
get(0)(["aaa"]) // "aaa"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/get.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/get.svg?maxAge=2592000&style=flat-square
