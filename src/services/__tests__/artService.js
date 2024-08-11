import { describe, it, expect } from 'vitest'
import artService from '@/services/artService'

describe('artService.js', () => {
  it('fetches art collection', async () => {
    const collection = await artService.getArtCollection()
    expect(collection).toHaveLength(8)
    expect(collection[0].title).toBe('Somnia, 2010')
    expect(collection[1].colorClass).toBe('yellow')
  })
})
