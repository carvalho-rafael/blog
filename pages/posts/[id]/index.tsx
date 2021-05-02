import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'
import NavBar from '../../../components/navbar'
import { PostContainer, PostHeader } from '../../../styles/pages/posts_id';


export default function Post({ posts }) {

  return (
    <>
      <Head>
        <title>{posts.title}</title>
      </Head>
      <NavBar />
      <PostContainer>
        <PostHeader>
          <h1>{posts.title}</h1>
          <p>{posts.description}</p>
          <time dateTime={posts.createdAt}>{posts.createdAt}</time>
          <hr />
        </PostHeader>
        <p dangerouslySetInnerHTML={{ __html: posts.body }}></p>
      </PostContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await fetch(`http://localhost:3333/posts/${context.params.id}`)
    .then(posts => posts.json());

  return {
    props: {
      posts: posts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch(`http://localhost:3333/posts/`)
    .then(posts => posts.json());

  const postsPaths = posts.map(post => {
    return {
      params: {
        id: post.id.toString()
      }
    }
  })

  return {
    paths: postsPaths,
    fallback: false
  }
}
