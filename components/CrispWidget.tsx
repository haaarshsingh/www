import React from 'react'

interface CrispWindow extends Window {
  $crisp: unknown[]
  CRISP_WEBSITE_ID: string
}
declare let window: CrispWindow

const initCrisp: React.FC = () => {
  React.useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = 'c4a9cc71-06b1-4848-a426-96d011caa9bf'
    const s = document.createElement('script')
    s.src = 'https://client.crisp.chat/l.js'
    s.async = true
    document.getElementsByTagName('head')[0].appendChild(s)
  })

  return <></>
}

export default initCrisp
