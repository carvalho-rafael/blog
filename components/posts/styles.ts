import styled from 'styled-components'

export const PostsContainer = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 900px;
    max-width: 100%;
    background: #f2f3f5;
    margin: auto;
`

export const PostItem = styled.li`
        width: 50%;
        min-width: 300px;
        padding: 1rem;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    time{
        display: block;
        margin-top: auto;
    }
`
