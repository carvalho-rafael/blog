import { useState, useEffect } from 'react';
import Admin from '..';

import { PostsContainer, PostItem } from '../../../styles/admin/admin'
import Link from 'next/link';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const posts = await fetch(`http://localhost:3333/posts/`)
        .then(posts => posts.json());

      setPosts(posts);
    })()
  }, [])

  return (
    <>
      <Admin title="Posts">
        <PostsContainer>
          <h1>Posts</h1>
          {posts.map(post => (
            <PostItem key={post.id}>
              <img src={`/${post.cover}`} alt="" />
              <div>
                <Link href={`/admin/posts/${post.id}/edit`}>
                  <a><h3>{post.title}</h3></a>
                </Link>
                <time dateTime={post.createdAt}>{post.createdAt}</time>
              </div>
            </PostItem>
          ))}
        </PostsContainer>
      </Admin>
    </>
  )
}
