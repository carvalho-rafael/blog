import Head from 'next/head'
import NavBar from '../components/navbar'
import Posts from '../components/posts'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Posts />
    </>
  )
}
