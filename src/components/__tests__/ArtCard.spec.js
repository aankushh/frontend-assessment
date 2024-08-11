import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArtCard from '@/components/ArtCard.vue'
import img1 from '@/assets/images/img1.png'

const artMock = {
  id: 1,
  title: 'Somnia, 2010',
  type: 'Painting',
  imageUrl: img1,
  colorClass: 'red',
  year: 2010
}

describe('ArtCard.vue', () => {
  it('renders the art title', () => {
    const wrapper = mount(ArtCard, {
      props: { art: artMock }
    })
    expect(wrapper.text()).toContain('Somnia, 2010')
  })

  it('renders the art type', () => {
    const wrapper = mount(ArtCard, {
      props: { art: artMock }
    })
    expect(wrapper.text()).toContain('Painting')
  })

  it('renders the correct image', () => {
    const wrapper = mount(ArtCard, {
      props: { art: artMock }
    })
    expect(wrapper.find('img').attributes('src')).toBe(artMock.imageUrl)
  })

  it('applies the correct color class', () => {
    const wrapper = mount(ArtCard, {
      props: { art: artMock }
    })
    expect(wrapper.find('.dot').classes()).toContain('red')
  })

  it('emits select-art event when select button is clicked', async () => {
    const wrapper = mount(ArtCard, {
      props: { art: artMock }
    })
    await wrapper.find('button').trigger('click')
  })
})
