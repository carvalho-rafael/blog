import { NavBarContainer, Logo } from './styles'

export default function NavBar() {
    return (
        <NavBarContainer>
            <Logo src="/logo.svg" alt="blog-logo"/>
            <h1>Blog</h1>
        </NavBarContainer>
    )
}
