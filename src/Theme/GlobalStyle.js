import { createGlobalStyle } from 'styled-components';
import colors from './Variables.js'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

    * {
        box-sizing: border-box;

    }

    html {
        font-size: 67.5%;
    }

    body {
        color: ${colors.darkGrey};
        font-family: 'Lato', sans-serif;

        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.8rem;
            color: ${colors.darkGrey};
        }

        h3 {
            font-size: 1.6rem;
        }

        button {
            border: 0;
            cursor: pointer;
            font-size: 1.2rem;
            text-transform: uppercase;
            color: #fff;

            button:hover {
            transform: scale(1.03);
            transition: .4s;
            background: ${props => props.primary ? `${colors.secondary}` : `${colors.primary}`}
            }

        }



        a {
            color: ${colors.darkGrey};
        }
    }

`

export default GlobalStyle;