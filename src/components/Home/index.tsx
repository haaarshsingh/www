export { Intro } from './Intro'
export { Ethos } from './Ethos'

import { Data } from './Data'
import * as d from './Data/data'

export const Work = () => (
  <Data
    data={d.work}
    header='Works'
    href='https://github.com/harshhhdev'
    external
  />
)

export const Blogs = () => <Data data={d.blogs} header='Writing' href='/blog' />

export const Speaking = () => (
  <Data
    data={d.speaking}
    header='Speaking'
    href='https://www.youtube.com/channel/UC6ix6gYRC62pM0sMRYKPKUQ'
    external
  />
)
