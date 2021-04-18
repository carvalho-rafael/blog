import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { lorem, date } from 'faker';
import Head from 'next/head'
import PostForm from '../../../../components/postForm';
import { Post } from '../../../../interfaces/Post';
import Admin from '../..';



export default function AdminPost({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Admin title="Editar Post">
        <h1>form de edição</h1>
        <PostForm post={post} />
      </Admin>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params
  const ss = id as string;
  let post: Post = {
    id: ss,
    title: lorem.words(9),
    description: lorem.sentence(18),
    body: lorem.paragraphs(5, '<br><br>'),
    cover: '/cover.jpg',
    createdAt: date.recent().toDateString()
  }

  return {
    props: {
      post,
    },
  }
}
