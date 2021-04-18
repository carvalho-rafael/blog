import { NavBarContainer, NavBarHeader } from './styles'

export default function NavBar({ title = '' }) {
    return (
        <NavBarContainer>
            <NavBarHeader>
                <a href="/">
                    <img src="/logo.svg" alt="blog-logo" />
                    <h1>{title !== '' ? title : 'Blog'}</h1>
                </a>
            </NavBarHeader>
        </NavBarContainer>
    )
}
