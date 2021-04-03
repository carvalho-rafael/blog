import Head from 'next/head'
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </div>
  )
}
