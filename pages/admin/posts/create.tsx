import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router'
import Head from 'next/head'
import NavBar from '../../../components/navbar'
import PostForm from '../../../components/postForm';


export default function Post() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar  title="Admin - Create Post" />
      <h1>form de criação</h1>
      <PostForm />
    </>
  )
}

/* 
FORM COMPONENTE
CREATE PAGE
EDIT PAGE

FORMCONTEXT = UPDATE, CREATE, SENT, LOADING, ERROR */