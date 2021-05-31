import React from 'react'

const SmoothScroll: React.FC = () => {
  React.useEffect(() => {
    let script = document.createElement('script')
    script.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js'
    )
    script.setAttribute('crossorigin', 'anonymous')
    document.querySelector('body')!.appendChild(script)
  }, [])

  return <></>
}

export default SmoothScroll
