import React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    grid-column-gap: 10px;
`;

const Size = styled.div`
    font-size: ${p => p.theme.type.fontSize(-2)};
`;

export const Typography = () => (
    <Wrapper>
        {theme.type.scale.reverse().map((index) => (
            <React.Fragment key={index}>
                <Size>[{index}] - {theme.type.fontSize(index)}</Size>
                <div style={{ fontSize: theme.type.fontSize(index) }}>
                    A Visual Type Scale
                </div>
            </React.Fragment>
        ))}
    </Wrapper>
);
