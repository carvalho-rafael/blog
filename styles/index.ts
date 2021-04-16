import styled from 'styled-components';
import { device } from './breackpoints';

export const Main = styled.main`
    display: flex;
    width: 1000px;
    max-width: 100%;
    margin: auto;

    @media ${device.laptopL} {
        width: 1200px;
    }
`