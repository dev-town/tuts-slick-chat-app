import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ system?: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    padding: ${p => p.theme.spacing.getSize()};
    margin-bottom: ${p => p.theme.spacing.getSize(2)};

    /* Example of using other components in styled component */
    ${(p) =>
        p.system &&
        css`
            background: ${(p) => p.theme.colors.backgroundSecondary};
            text-align: center;
            ${Content} {
                color: ${p.theme.colors.info};
            }
        `}
`;

export const Avatar = styled.img`
    height: 30px;
    width: 30px;
`;
export const Data = styled.div`
    margin-left: ${p => p.theme.spacing.getSize(2)};
    width: 100%;
`;
export const Meta = styled.div`
    margin-bottom: ${p => p.theme.spacing.getSize()};
    font-size: ${p => p.theme.type.fontSize(-1)};
`;
export const Name = styled.span``;
export const Time = styled.span`
    margin-left: ${p => p.theme.spacing.getSize()};
`;
export const Content = styled.div``;
