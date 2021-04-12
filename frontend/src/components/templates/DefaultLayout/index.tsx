import { FC } from 'react'

import { Header } from '../../organisms/Header'

import { Z_INDEX_HEADER } from './const'
import styles from '../../../styles/Home.module.css'

export const DefaultLayout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex overflow-hidden">
        <main className="flex-auto">{children}</main>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
        </a>
      </footer>
    </div>
  )
}
