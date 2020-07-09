import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    padding: ${p => p.theme.spacing.getSize()};
    margin-bottom: ${p => p.theme.spacing.getSize(2)};
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
    font-size: 0.8em;
`;
export const Name = styled.span``;
export const Time = styled.span`
    margin-left: ${p => p.theme.spacing.getSize()};
`;
export const Content = styled.div``;
