import styled from 'styled-components'

export const NavBarContainer = styled.div`
    display: flex;
    height: 100px;
    width: 100%;

    color: ${props => props.theme.textLight};
    background: ${props => props.theme.primary};
`

export const NavBarHeader = styled.header`
    
    a {
        display: flex;
        align-items: center;

        img {
            height: 100px;
        }
    }

`
