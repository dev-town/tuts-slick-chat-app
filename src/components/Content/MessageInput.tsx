import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
    display: block;
    height: 100%;
    width: 100%;

    padding: ${p => p.theme.spacing.getSize(2)};
    border: 1px solid ${p => p.theme.colors.border};
    outline: none;
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
    box-sizing: border-box;
`;

export const MessageInput = () => (
    <Textarea />
);