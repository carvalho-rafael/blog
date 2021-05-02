import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Admin from '../..';
import PostForm from '../../../../components/postForm';

export default function EditPost() {
  const [post, setPost] = useState<any>({});
  const {id}  = useRouter().query

  useEffect(() => {
    (async () => {
      const post = await fetch(`http://localhost:3333/posts/${id}`)
        .then(data => data.json());

      setPost(post);
    })()
  }, [])

  return (
    <>
      <Admin title="Editar Post">
        <h1>form de edição</h1>
        <PostForm post={post} />
      </Admin>
    </>
  )
}
