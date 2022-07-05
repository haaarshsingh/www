import { withOGImage } from 'next-api-og-image'

enum ImageProps {
  'title',
  'description',
  'readingTime',
  'words',
  'date',
}

const style = `
  * {
    margin: 0;
    font-family: "Magnat";
  }

  @font-face {
    font-family: "Magnat";
    src: url("https://hxrsh.in/fonts/MagnatText-Regular.otf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Magnat";
    src: url("https://hxrsh.in/fonts/MagnatHead-Semibold.otf");
    font-weight: bold;
    font-style: normal;
  }

  div.main {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px;
    background-size: cover;
    background-image: url("https://hxrsh.in/static/BlogBG.jpg");
    color: white;
  }

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
  }

  .description {
    color: #A0A0A0;
  }

  div.bottom {
    display: flex;
    justify-content: space-between;
  }

  div.socials {
    display: flex;
    align-items: center;
  }

  .socials > svg {
    margin-right: 5px;
  }
`

export default withOGImage<'query', keyof typeof ImageProps>({
  template: {
    html: async ({ title, description, readingTime, words, date }) => {
      return `
        <div class='main'>
          <style>${style}</style>  
          <div>
            <h1>${title}</h1>
            <p class='description'>${description}</p>
          </div>
          <div class='bottom'>
            <p>
              ${readingTime} minutes • ${words} words • ${date}
            </p>
            <div class='socials'>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
              <p className='text-2xl text-white'>/harshhhdev</p>
            </div>
          </div>
        </div>
      `
    },
  },
})
