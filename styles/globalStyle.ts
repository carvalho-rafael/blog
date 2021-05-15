import { createGlobalStyle } from 'styled-components'
import { device } from './breackpoints'

export default createGlobalStyle`
html,
    body {
    padding: 0;
    margin: 0;
    font-family: 'Titillium Web', sans-serif;
    line-height: 1.2;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
    padding: 0;
}

* {
    box-sizing: border-box;
}
p {
    font-size: 16px;

    @media ${device.tablet} {
        font-size: 18px;
    }
}
`