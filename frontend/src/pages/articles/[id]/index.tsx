import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from '../../../styles/Home.module.css'

const ArticlesDetailId = () => {
  const { query } = useRouter()
  const id = (query?.articleId || query?.id) as string

  return (
    <Fragment>
      <Head>
        <title>投稿記事詳細</title>
      </Head>
      <div className="flex justify-center items-center p-20">
        <p>id: {id}</p>
      </div>
    </Fragment>
  )
}

export default ArticlesDetailId
