import { helloFunc } from '../src/hello'

test('helloFuncTest', () => {
  const actual = helloFunc()
  expect(actual).toBe('hello')
})
