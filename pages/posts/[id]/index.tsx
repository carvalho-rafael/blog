import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'
import NavBar from '../../../components/navbar'
import { PostContainer, PostHeader } from '../../../styles/pages/posts_id';


export default function Post({ posts }) {

  return (
    <>
      <Head>
        <title>Blog - {posts.title}</title>
      </Head>
      <NavBar />
      <PostContainer>
        <PostHeader>
          <h1>{posts.title}</h1>
          <p>{posts.description}</p>
          <time dateTime={posts.createdAt}>{posts.createdAt}</time>
          <hr />
        </PostHeader>
        <div dangerouslySetInnerHTML={{ __html: stateToHTML(convertFromRaw(JSON.parse(posts.body)))}}></div>
      </PostContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API}posts/${context.params.id}`)
    .then(posts => posts.json());

  return {
    props: {
      posts: posts,
    },
    revalidate: 1 * 60
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API}posts`)
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
    fallback: 'blocking'
  }
}
