import { PostsContainer, PostItem, SideBar, AdmimContent, NavBarContainer, NavBarHeader } from './styles'
import { date, lorem } from "faker";
import Head from 'next/head'

export default function Admin({ children, title }) {
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
        <>
            <Head>
                <title>My Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBarContainer>
                <NavBarHeader>
                    <a href="/admin">
                        <h3>ADMIN - {title}</h3>
                    </a>
                </NavBarHeader>
            </NavBarContainer>
            <AdmimContent>
                <SideBar>
                    <ul>
                        <li>Posts</li>
                    </ul>
                </SideBar>
                {children ? (
                    <main>
                        {children}
                    </main>
                ) : (
                    <PostsContainer>
                        <h1>Posts</h1>
                        {posts.map(post => (
                            <PostItem key={post.id}>
                                <img src={post.cover} alt="" />
                                <div>
                                    <a href={`/admin/posts/${post.id}/edit`}><h3>{post.title}</h3></a>
                                    <time dateTime={post.createdAt}>{post.createdAt}</time>
                                </div>
                            </PostItem>
                        ))}
                    </PostsContainer>
                )}
            </AdmimContent>
        </>
    )

}