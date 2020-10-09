const { test } = require('uvu')
const assert = require('uvu/assert')
const converter = require('./index.js')

// hsl/hex/rgb and hsla/hexa/rgba are all equivalent conversions.
// we are testing that our conversion script works
const hsl = 'hsl(336, 100%, 50%)'
const hex = '#ff0066'
const rgb = 'rgb(255, 0, 102)'
const hsla = 'hsla(336, 100%, 50%, 0.8)'
const hexa = '#ff0066cc'
const rgba = 'rgba(255, 0, 102, 0.8)'

test('converter.isHex correctly identifies if a value is a hex string', () => {
  assert.is(converter.isHex(hex), true)
  assert.is(converter.isHex(hexa), false)
  assert.is(converter.isHex(hsl), false)
})

test('converter.isHexa correctly identifies if a value is a hexa string', () => {
  assert.is(converter.isHexa(hexa), true)
  assert.is(converter.isHexa(hex), false)
  assert.is(converter.isHexa(hsl), false)
})

test('converter.isRgb correctly identifies if a value is an rgb string', () => {
  assert.is(converter.isRgb(rgb), true)
  assert.is(converter.isRgb(rgba), false)
  assert.is(converter.isRgb(hsl), false)
})

test('converter.isRgba correctly identifies if a value is an rgba string', () => {
  assert.is(converter.isRgba(rgba), true)
  assert.is(converter.isRgba(rgb), false)
  assert.is(converter.isRgba(hsl), false)
})

test('converter.isHsl correctly identifies if a value is a hsl string', () => {
  assert.is(converter.isHsl(hsl), true)
  assert.is(converter.isHsl(hsla), false)
  assert.is(converter.isHsl(hex), false)
})

test('converter.isHsla correctly identifies if a value is a hsla string', () => {
  assert.is(converter.isHsla(hsla), true)
  assert.is(converter.isHsla(hsl), false)
  assert.is(converter.isHsla(hex), false)
})

test('converter.isValidColor correctly handles all color types', () => {
  assert.is(converter.isValidColor(hex), true)
  assert.is(converter.isValidColor(hexa), true)
  assert.is(converter.isValidColor(hsl), true)
  assert.is(converter.isValidColor(hsla), true)
  assert.is(converter.isValidColor(rgb), true)
  assert.is(converter.isValidColor(rgba), true)

  // can handle 3 or 6 digit hex values with or without the starting #
  assert.is(converter.isValidColor('f06'), true)
  assert.is(converter.isValidColor('ff0066'), true)
  assert.is(converter.isValidColor('#f06'), true)

  // correctly returns false if it's not a valid color
  assert.is(converter.isValidColor('rgb(255, 0, 102, 0.8)'), false)
  assert.is(converter.isValidColor('#f060'), false)
  assert.is(converter.isValidColor('hsl(500, blue, 60000%)'), false)
})

// test all possible color conversions
test('converts hsl to hex', () => {
  assert.is(converter.convert(hsl, 'hex'), hex)
})

test('converts hsla to hexa', () => {
  assert.is(converter.convert(hsla, 'hexa'), hexa)
})

test('converts hsl to rgb', () => {
  assert.is(converter.convert(hsl, 'rgb'), rgb)
})

test('converts hsla to rgba', () => {
  assert.is(converter.convert(hsla, 'rgba'), rgba)
})

test('converts hex to hsl', () => {
  assert.is(converter.convert(hex, 'hsl'), hsl)
})

test('converts hexa to hsla', () => {
  assert.is(converter.convert(hexa, 'hsla'), hsla)
})

test('converts hex to rgb', () => {
  assert.is(converter.convert(hex, 'rgb'), rgb)
})

test('converts hexa to rgba', () => {
  assert.is(converter.convert(hexa, 'rgba'), rgba)
})

test('converts rgb to hex', () => {
  assert.is(converter.convert(rgb, 'hex'), hex)
})

test('converts rgba to hexa', () => {
  assert.is(converter.convert(rgba, 'hexa'), hexa)
})

test('converts rgb to hsl', () => {
  assert.is(converter.convert(rgb, 'hsl'), hsl)
})

test('converts rgba to hsla', () => {
  assert.is(converter.convert(rgba, 'hsla'), hsla)
})

test.run()
