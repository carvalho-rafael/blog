import styled from 'styled-components'
import { device } from '../../../styles/breackpoints'

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        margin: 0 1rem;
        margin-bottom: .5rem;
    }

    textarea {
        margin: 0 1rem;
        padding: .5rem;
        flex: 1;

        font-size: inherit; 
    }
`
