import styled from 'styled-components'
import { device } from '../../styles/breackpoints'

export const AdmimContent = styled.div`
    display: flex;
    background: ${props => props.theme.background};

    main {
        flex: 1;
    }
`
export const SideBar = styled.nav`
    width: 220px;
    min-height: calc(100vh - 80px);

    background: ${props => props.theme.primaryDark};

    ul {

        li {

        }
    }
`
export const NavBarContainer = styled.header`
    display: flex;
    height: 80px;
    width: 100%;

    color: ${props => props.theme.textLight};
    background: ${props => props.theme.primary};
`

export const NavBarHeader = styled.header`
    margin-left: 1rem;

    a {
        height: 80px;
        display: flex;
        align-items: center;

        img {
            height: 100px;
        }
    }

`

export const PostsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    margin: auto;

    @media ${device.laptopL} {
        width: 1200px;
    }
`

export const PostItem = styled.article`
    display: flex;
    padding: 1rem;
    width: 100%;

    h3 {
        color: ${props => props.theme.primaryDark}
    }

    div {
        margin-left: 1rem;
        * {
            margin: .5rem 0;
        }
    }

    img {
        width: 120px;
        height: 80px;
        object-fit: cover;
    }
    time{
        display: block;
        margin-top: auto;
    }
    
`
