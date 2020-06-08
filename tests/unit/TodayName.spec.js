import TodayName from "@/components/base/TodayNameComponent.vue";
import { mount } from '@vue/test-utils'

describe('TodayName', () => {
  test('If selected name false, do show date', () => {
    const wrapper = mount(TodayName, {
      propsData: {
        name: false
      }
    })
    const span = wrapper.find('span')
    expect(span.element.id).toBe("today-date")
  })

  test('If selected name true, do show name', () => {
    const wrapper = mount(TodayName, {
      propsData: {
        name: true
      }
    })
    const span = wrapper.find('span')
    expect(span.element.id).toBe("today-name")
  })
})