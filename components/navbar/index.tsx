import { Button, Container } from '@material-ui/core'
import { NightsStay, WbSunny } from '@material-ui/icons'
import Link from 'next/link'
import { useContext } from 'react'
import { CustomThemeContext } from '../../contexts/customThemeProvider'
import { NavBarContainer, NavBarHeader, NavBarWrapper } from './styles'

export default function NavBar({ title = '' }) {
    const { toggleTheme, theme } = useContext(CustomThemeContext)

    return (
        <NavBarWrapper>
            <NavBarContainer>
                <NavBarHeader>
                    <Link href="/">
                        <a>
                            <img src="/logo.svg" alt="blog-logo" />
                            <h1>{title !== '' ? title : 'Blog'}</h1>
                        </a>
                    </Link>
                </NavBarHeader>
                <Button onClick={toggleTheme} style={{ marginLeft: 'auto' }}>
                    {theme === 'light' ? (
                        <>
                            <NightsStay />
                            <span style={{ marginLeft: '.5rem' }}>Dark Mode</span>
                        </>
                    ) : (
                        <>
                            <WbSunny htmlColor="yellow" />
                            <span style={{ color: "yellow", marginLeft: '.5rem' }}>Light Mode</span>
                        </>
                    )}
                </Button>
            </NavBarContainer>
        </NavBarWrapper>
    )
}
