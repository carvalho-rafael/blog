import { NavBarContainer, NavBarHeader } from './styles'

export default function NavBar() {
    return (
        <NavBarContainer>
            <NavBarHeader>
                <a href="/">
                    <img src="/logo.svg" alt="blog-logo" />
                    <h1>Blog</h1>
                </a>
            </NavBarHeader>
        </NavBarContainer>
    )
}
