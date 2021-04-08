import styled from 'styled-components'

export const NavBarContainer = styled.header`
    height: 100px;
    width: 100%;
    background: ${props => props.theme.primary};
`

export const Logo = styled.img`
    height: inherit;
    padding: 1rem;
`
