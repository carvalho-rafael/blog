import styled from 'styled-components'

export const InputContainer = styled.div<{ name: string }>`
    flex: 5;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    min-width: 300px;
    max-width: 100%;

    ${props => props.name === "name" &&
        `width: 400px; flex:1;`
    }

    input {
        padding: .5rem;
        font-size: inherit;
    }

`
