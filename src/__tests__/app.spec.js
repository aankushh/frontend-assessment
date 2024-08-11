import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders the router-view', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['router-view']
      }
    })
    expect(wrapper.html()).toContain('<router-view')
  })
})
