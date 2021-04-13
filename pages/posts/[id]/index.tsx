import Head from 'next/head'
import NavBar from '../../../components/navbar'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <h1>{id}</h1>
    </>
  )
}
