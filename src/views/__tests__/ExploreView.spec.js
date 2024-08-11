import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ExploreView from '@/views/ExploreView.vue'
import { useArtStore } from '@/store'

vi.mock('@/store')

describe('ExploreView.vue', () => {
  useArtStore.mockReturnValue({
    artCollection: [],
    fetchArtCollection: vi.fn()
  })
  it('renders search bar correctly', () => {
    const wrapper = mount(ExploreView)
    const searchBar = wrapper.find('input[type="text"]')
    expect(searchBar.exists()).toBe(true)
    expect(searchBar.attributes('placeholder')).toBe('Search by artwork, artist name...')
  })

  it('renders tabs and filters correctly', () => {
    useArtStore.mockReturnValue({
      artCollection: [],
      fetchArtCollection: vi.fn()
    })
    const wrapper = mount(ExploreView)
    const tabs = wrapper.findAll('.tab')
    expect(tabs).toHaveLength(4)
    expect(tabs[0].text()).toBe('Home')
    expect(tabs[1].text()).toBe('Explore')

    const filters = wrapper.findAll('.filters span')
    expect(filters).toHaveLength(4)
    expect(filters[0].text()).toBe('collection')
    expect(filters[1].text()).toBe('type')
  })

  it('fetches art collection on created', () => {
    useArtStore.mockReturnValue({
      artCollection: [],
      fetchArtCollection: vi.fn()
    })

    mount(ExploreView)
    expect(useArtStore().fetchArtCollection).toHaveBeenCalled()
  })
})
