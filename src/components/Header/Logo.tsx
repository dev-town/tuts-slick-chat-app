import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-right: auto;
    color: ${p => p.theme.colors.primary};
    font-size: ${p => p.theme.type.fontSize(2)};
`;

export const Logo = () => (<Wrapper>Slick Chat</Wrapper>);
