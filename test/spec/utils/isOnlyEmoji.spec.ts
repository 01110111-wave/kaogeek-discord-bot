import { describe, expect, it } from 'vitest'

import isOnlyEmoji from '../../../src/utils/isOnlyEmoji'

describe('isOnlyEmoji', () => {
  it.each([
    { msg: '🫠' },
    { msg: '🅰️' },
    { msg: ' 🅾 🅾 🅾 🅾   🅾' },
    { msg: '<:test:000>' },
    { msg: '<a:test:111>' },
    { msg: '<:ShareX_0RB3:1108771953776537701>' },
    { msg: '<:Test:1108771953776537701>' },
    { msg: '🅾🫠' },
  ])('should match emoji ($msg)', async ({ msg }) => {
    expect(isOnlyEmoji(msg)).toBeTruthy()
  })

  it.each([
    { msg: '' },
    { msg: 'hello' },
    { msg: 'a' },
    { msg: '<html>' },
    { msg: '1 2 3' },
    { msg: '0' },
    { msg: '-1' },
    { msg: '0x 000' },
    { msg: '<:ShareX_0000 :>' },
    { msg: 'Test : ' },
    { msg: ':Imao' },
    { msg: 'hello 🫠🫠🫠' },
    { msg: 'hi <:ShareX_00000:>' },
  ])('should not match emoji ($msg)', async ({ msg }) => {
    expect(isOnlyEmoji(msg)).toBeFalsy()
  })
})
