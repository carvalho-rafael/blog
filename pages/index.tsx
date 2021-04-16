import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import NavBar from '../components/navbar'
import Posts from '../components/posts'
import { Main } from '../styles'

type Post = {
  id: number
  name: string
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main>
        <section>
          <h1>Últimas Notícias</h1>
          <Posts />
        </section>
        <section>
          <h1>Mais lidas</h1>
          <ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>
        </section>
      </Main>
    </>
  )
}

export const getStaticProps = async () => {
  let posts: Post = {
    id: 2,
    name: 'rafael'
  }

  return {
    props: {
      posts,
    },
    revalidate: 1
  }
}