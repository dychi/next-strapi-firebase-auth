import { Fragment } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

const Articles: NextPage = () => {
  return (
    <Fragment>
      <div>
        <Head>
          <title>投稿一覧</title>
        </Head>
        <div className="flex justify-center items-center p-20">
          <h1>Articles List</h1>
        </div>
      </div>
    </Fragment>
  )
}

export default Articles
