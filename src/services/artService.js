import img1 from '@/assets/images/img1.png'
import img2 from '@/assets/images/img2.png'

export default {
  async getArtCollection() {
    return [
      {
        id: 1,
        title: 'Somnia, 2010',
        type: 'Painting',
        imageUrl: img1,
        colorClass: 'red'
      },
      {
        id: 2,
        title: 'Solar Serenity, 2022',
        type: 'Drawing',
        imageUrl: img2,
        colorClass: 'yellow'
      },
      {
        id: 3,
        title: 'Somnia, 2010',
        type: 'Painting',
        imageUrl: img1,
        colorClass: 'blue'
      },
      {
        id: 4,
        title: 'Solar Serenity, 2022',
        type: 'Drawing',
        imageUrl: img2,
        colorClass: 'green'
      },
      {
        id: 5,
        title: 'Somnia, 2010',
        type: 'Painting',
        imageUrl: img1,
        colorClass: 'yellow'
      },
      {
        id: 6,
        title: 'Solar Serenity, 2022',
        type: 'Drawing',
        imageUrl: img2,
        colorClass: 'green'
      },
      {
        id: 7,
        title: 'Somnia, 2010',
        type: 'Painting',
        imageUrl: img1,
        colorClass: 'red'
      },
      {
        id: 8,
        title: 'Solar Serenity, 2022',
        type: 'Drawing',
        imageUrl: img2,
        colorClass: 'blue'
      }
    ]
  }
}
