import About from '@components/About'
import styles from '@css/common.module.css'
import { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <About />
      </div>
    </div>
  )
}

export default Page
