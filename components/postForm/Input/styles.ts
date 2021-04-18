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

    input {
        margin: 0 1rem;
        min-width: 250px;
        max-width: 100%;
        padding: .5rem;
        flex: 1;

        font-size: inherit;

        @media ${device.tablet} {
            &[name="title"] {
                width: 300px;
            }
            &[name="nme"] {
                width: 100%;
            }
        }    
    }

    @media ${device.tablet} {
        width: fit-content;
    }
`
