import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

//@ts-ignore
import msFunction from 'modularscale-js';

const base = 4;
const negatives = 2;
const ratio = { base: [1], ratio: 1.25 };
const round = (value: number) => Math.round(value * 100) / 100;
const generateType = (index: number) => round(msFunction(index, ratio));
const scale = [...Array(6).keys()].map(index => index - negatives);

const typeScale = new Map(scale.map(i => [i, generateType(i)]));



export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
        font-size: 14px;
        line-height: ${ratio.ratio};
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
`;

export interface ITheme {
    colors: {
        text: string;
        background: string;
        backgroundSecondary: string;
        border: string;
        primary: string;
        info: string;
    },
    spacing: {
        base: number,
        getSize: (value?: number) => string;
    },
    breakpoints: {
        mobileS: string;
        mobileM: string;
        mobileL: string;
        tablet: string;
        laptop: string;
        laptopL: string;
        desktop: string;
    },
    type: {
        scale: number[];
        fontSize: (value?: number) => string;
    },
    interface: {
        content: {
            info: number;
            create: number;
        },
        layout: {
            header: number,
            footer: number,
        }
    }
}

export const theme: ITheme = {
    colors: {
        text: '#fff',
        background: '#313131',
        backgroundSecondary: '#272727',
        border: '#414141',
        primary: '#ca3e47',
        info: 'rgb(97,177,213)',
    },
    spacing: {
        base,
        getSize: (value = 1) => `${base * value}px`,
    },
    breakpoints: {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px',
    },
    type: {
        scale,
        fontSize: (value = 0) => {
            const size = typeScale.get(value) || typeScale.get(0);
            return `${size}rem`;
        },
    },
    interface: {
        content: {
            info: 30,
            create: 50,
        },
        layout: {
            header: 40,
            footer: 30,
        }
    }
}
