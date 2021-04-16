import styled from 'styled-components'
import { device } from '../../styles/breackpoints'

export const PostsContainer = styled.section`
    width: 700px;
    max-width: 100%;

    @media ${device.laptopL} {
        width: 800px;
    }
`

export const PostItem = styled.article`
    display: flex;
    padding: 1rem;

    h1 {
        font-size: 28px;
        color: ${props => props.theme.primaryDark}
    }

    div {
        margin-left: 1rem;
        * {
            margin: .5rem 0;
        }
    }

    img {
        width: 320px;
        height: 180px;
        object-fit: cover;
    }
    time{
        display: block;
        margin-top: auto;
    }
    
`
