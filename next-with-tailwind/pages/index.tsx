import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>next with tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="uppercase text-2xl">Next App</h1>
    </div>
  )
}

export default Home
