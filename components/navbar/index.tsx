import Link from 'next/link'
import { NavBarContainer, NavBarHeader } from './styles'

export default function NavBar({ title = '' }) {
    return (
        <NavBarContainer>
            <NavBarHeader>
                <Link href="/">
                <a>
                    <img src="/logo.svg" alt="blog-logo" />
                    <h1>{title !== '' ? title : 'Blog'}</h1>
                </a>
                </Link>
            </NavBarHeader>
        </NavBarContainer>
    )
}
