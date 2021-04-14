import styled from 'styled-components'

export const NavBarContainer = styled.header`
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;

    color: ${props => props.theme.textLight};
    background: ${props => props.theme.primary};
`

export const Logo = styled.img`
    height: inherit;
    padding: 1rem;
`
