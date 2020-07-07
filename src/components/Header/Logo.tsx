import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-right: auto;
    color: ${p => p.theme.colors.primary};
`;

export const Logo = () => (<Wrapper>Slick Chat</Wrapper>);
