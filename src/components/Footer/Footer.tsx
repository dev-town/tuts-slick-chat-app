import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding: 0 ${p => p.theme.spacing.getSize(2)};
`;

export const Footer = () => (
    <Wrapper>
        Slick Chat by Dev Town
    </Wrapper>
);