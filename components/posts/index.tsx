import { PostItem, PostsContainer } from './styles';
import { lorem, date } from 'faker';
import Link from 'next/link'

export default function Posts({posts}) {

    return (
        <PostsContainer>
            {posts.map(post => (
                <PostItem key={post.id}>
                    <img src={post.cover} alt="" />
                    <div>
                        <Link href={`/posts/${post.id}`}>
                            <a><h1>{post.title}</h1></a>
                        </Link>
                        <p>{post.description}</p>
                        <time dateTime={post.createdAt}>{post.createdAt}</time>
                    </div>
                </PostItem>
            ))}
        </PostsContainer>
    )
}