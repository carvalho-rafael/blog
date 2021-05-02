import { SideBar, AdmimContent, NavBarContainer, NavBarHeader } from '../../styles/admin/admin'
import Head from 'next/head'
import Link from 'next/link'

export default function Admin({ children, title }) {
    return (
        <>
            <Head>
                <title>| ADMIN | {title}</title>
            </Head>
            <NavBarContainer>
                <NavBarHeader>
                    <Link href="/admin">
                        <a >
                            <h3>| ADMIN | {title}</h3>
                        </a>
                    </Link>
                </NavBarHeader>
            </NavBarContainer>
            <AdmimContent>
                <SideBar>
                    <ul>
                        <Link href="/admin/posts">
                            <a>Posts</a>
                        </Link>
                    </ul>
                </SideBar>
                <main>
                    {children}
                </main>
            </AdmimContent>
        </>
    )

}