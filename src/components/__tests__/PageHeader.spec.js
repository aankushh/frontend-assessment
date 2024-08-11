import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PageHeader from '@/components/PageHeader.vue'

describe('PageHeader.vue', () => {
  it('renders the title properly', () => {
    const wrapper = mount(PageHeader)
    expect(wrapper.text()).toContain('Welcome, Ankush')
  })
})
