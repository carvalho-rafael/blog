import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html,
    body {
    padding: 0;
    margin: 0;
    font-family: 'Titillium Web', sans-serif;
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
}`