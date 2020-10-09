# Convert Color

A module to convert colors between different formats.

## Installation

Install it via npm or yarn

```
npm install convert-color-js
```

## Usage

The module has a number of methods available on it to aid in converting colors. I've detailed the methods, how they're used, and what the expected output is below:

```js
const convertColor = require('convert-color-js')

// check if a string is a HEX value
convertColor.isHex('#f06') // => true
convertColor.isHex('#82aaff') // => true
convertColor.isHex('rgb(255, 160, 195)') // => false

// check if a string is a HEXA value (HEX with alpha)
convertColor.isHexa('#f06c') // => true
convertColor.isHex('#82aaffaa') // => true

// check if a string is an RGB value
convertColor.isRgb('rgb(255, 255, 255)')) //=> true
convertColor.isRgb('#f06') //=> false

// check if a string is an RGBA value
convertColor.isRgb('rgba(255, 255, 255, 0.5)')) //=> true
convertColor.isRgb('rgb(255, 255, 255)')) //=> false

// check if a string is an HSL value
convertColor.isHsl('hsl(336, 100%, 50%)') //=> true

// check if a string is an HSLA value
convertColor.isHsla('hsla(336, 100%, 50%, 0.8)') //=> true

// check if a string is a valid color
// returns true if the string is HEX, HEXA, RGB, RGBA, HSL, or HSLA
convertColor.isValidColor('#f06') //=> true
convertColor.isValidColor(42) //=> false
convertColor.isValidColor('unicorns') //=> false

// convert a color string to a different format
// alpha types can only convert to alphas, and vice versa
// e.g., you can convert RGBA to HSLA, but not RGBA to HSL
convertColor.convert('#f06', 'hsl') //=> hsl(336, 100%, 50%)
```

## Related

- [convert-color-cli](https://github.com/mikemcbride/convert-color-cli) - convert between color formats from the terminal
