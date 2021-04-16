import { PostItem, PostsContainer } from './styles';
import { lorem, date } from 'faker';

export default function Posts() {
    let posts = [];

    for (let i = 0; i < 10; i++) {
        posts.push({
            id: i,
            title: lorem.sentence(9),
            description: lorem.sentence(18),
            body: lorem.paragraphs(3),
            cover: 'cover.jpg',
            createdAt: date.recent().toDateString()
        })
    }

    return (
        <PostsContainer>
            {posts.map(post => (
                <PostItem key={post.id}>
                    <img src={post.cover} alt="" />
                    <div>
                        <a href={`/posts/${post.id}`}><h1>{post.title}</h1></a>
                        <p>{post.description}</p>
                        <time dateTime={post.createdAt}>{post.createdAt}</time>
                    </div>
                </PostItem>
            ))}
        </PostsContainer>
    )
}