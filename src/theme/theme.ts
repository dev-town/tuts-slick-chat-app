import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
`;

export interface ITheme {
    colors: {
        text: string;
        background: string;
        border: string;
    }
}

export const theme: ITheme = {
    colors: {
        text: '#fff',
        background: '#313131',
        border: '#414141',
    }
}