import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router'
import { lorem, date } from 'faker';
import Head from 'next/head'
import NavBar from '../../../components/navbar'
import { PostContainer, PostHeader } from './styles';


export default function Post({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{posts.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <PostContainer>
        <PostHeader>
          <h1>{posts.title}</h1>
          <p>{posts.description}</p>
          <time dateTime={posts.createdAt}>{posts.createdAt}</time>
          <hr/>
        </PostHeader>
        <p dangerouslySetInnerHTML={{ __html: posts.body }}></p>
      </PostContainer>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params

  let posts = {
    id,
    title: lorem.words(9),
    description: lorem.sentence(18),
    body: lorem.paragraphs(5, '<br><br>'),
    cover: '/cover.jpg',
    createdAt: date.recent().toDateString()
  }

  return {
    props: {
      posts: posts,
    },
  }
}