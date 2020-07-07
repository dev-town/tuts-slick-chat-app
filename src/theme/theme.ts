import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    body {
        font-family: 'Roboto', sans-serif;
    }
`;

export interface ITheme {
    colors: {
        text: string;
        background: string;
        border: string;
        primary: string;
    },
    spacing: {
        base: number,
        getSize: (value?: number) => string;
    }
}

const base = 4;

export const theme: ITheme = {
    colors: {
        text: '#fff',
        background: '#313131',
        border: '#414141',
        primary: '#ca3e47',
    },
    spacing: {
        base,
        getSize: (value = 1) => `${base * value}px`,
    }
}