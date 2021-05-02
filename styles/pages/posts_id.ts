import styled from 'styled-components';
import { device } from '../breackpoints';

export const PostContainer = styled.div`
    margin: auto;
    width: 100%;
    max-width: 900px;
    padding: 1rem;
`

export const  PostHeader = styled.header`
    margin-bottom: 2rem;

    h1 {
        margin-bottom: 1rem;
    }
    
    p {
        font-size: 18px;
        font-weight: 700;
        color: ${props => props.theme.text}
    }
    
    @media ${device.tablet} {
        h1 {
            font-size: 42px;
        }
    }

    @media ${device.laptopL} {
        h1 {
            font-size: 56px;
        }
    }
`
