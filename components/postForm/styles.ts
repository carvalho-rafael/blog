import styled from 'styled-components'
import { device } from '../../styles/breackpoints'

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 1200px;
    width: 100%;
    margin: auto;

    button {
        padding:1rem;
        font-size: inherit;
    }
`
export const InputGroup = styled.div`
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    flex-wrap: wrap;

    @media ${device.tablet} {
        flex-direction: row;
    } 
`
