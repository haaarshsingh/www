import { withOGImage } from 'next-api-og-image'

enum ImageProps {
  'title',
  'description',
  'readingTime',
  'words',
  'date',
}

export default withOGImage<'query', keyof typeof ImageProps>({
  template: {
    html: async ({ title, description, readingTime, words, date }) => {
      return `<div class='main'><style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600');*{margin:0;font-family:'Inter',sans-serif;}.main{width:1200px;height:630px;display: flex;flex-direction:column;justify-content:space-between;background-color:#1C1C1C; color:white;}.top{padding:50px;}h1{font-size:32px;margin-bottom:10px;}p{font-size:18px;line-height:32px;color:#707070;}.bottom{display: flex;justify-content:space-between;margin: 0 50px 50px 50px;}</style> <div class='top'> <h1>${title}</h1> <p class='description'>${description}</p></div><div class='bottom'> <p>${date}</p><p>${readingTime} minutes • ${words} words</p></div></div>`
    },
  },
})
