import { PostItem, PostsContainer } from './styles';
import { lorem, date } from 'faker';
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

type Post = {
    id: string
    title: string
    cover: string
    description: string
    body: string
    createdAt: string
}

type PostsProps = {
    posts: Post[]
}

const PAGE_POSTS = 5;

export default function Posts({ posts }: PostsProps) {

    const [currentPage, setCurrentPage] = useState(1)
    const [currentPosts, setCurrentPosts] = useState<Post[]>(posts.slice(0, PAGE_POSTS))
    const pages = useRef(Math.ceil(posts.length / PAGE_POSTS))

    useEffect(() => {
        setCurrentPosts(posts.slice((currentPage-1) * PAGE_POSTS, (currentPage-1) * PAGE_POSTS + PAGE_POSTS))
    }, [currentPage])
    
    return (
        <PostsContainer>
            {currentPosts.map(post => (
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
            <h1>{currentPage}</h1>
            <div>
                {[...Array(pages.current)].map((page, index) => (
                    <a onClick={() => setCurrentPage(index + 1)}>{index + 1}</a>
                ))}
            </div>
        </PostsContainer>
    )
}