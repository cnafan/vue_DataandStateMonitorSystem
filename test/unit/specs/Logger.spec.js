// import loggerUtils from '../../../src/utils/loggerUtils'
//
// describe('test getlog function', () => {
//   test('it should return array', () => {
//     const output = {}
//     expect(loggerUtils.getLog()).toEqual(output)
//   })
// })
import Logger from '../../../src/components/log/Logger'
import {mount} from '@vue/test-utils'

describe('logger', () => {
  const wrapper = mount(Logger)
  it('should display timeline', function () {
    expect(wrapper.contains('el-timeline')).toBe(true)
  })
})
