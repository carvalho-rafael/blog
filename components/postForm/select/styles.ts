import styled from 'styled-components'
import { device } from '../../../styles/breackpoints'

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;

    label {
        margin-bottom: .5rem;
    }

    select {
        padding: .5rem;
        font-size: inherit;
    }
`
