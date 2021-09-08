/* eslint-env jest */
/**
 * @jest-environment jsdom
 */

const { fetch, type } = require('fetch-undici')

test('jsdom in mjs', () => {
  expect(type).toBe('node.cjs')
  expect(fetch).toBeTruthy()
})