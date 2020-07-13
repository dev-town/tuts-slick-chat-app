import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
`;
export const InfoWrapper = styled.div`
    display: flex;
    flex: 0 0 ${p => p.theme.interface.content.info}px;
    justify-content: center;
    flex-direction: column;
    padding: 0 ${p => p.theme.spacing.getSize(2)};
    border-bottom: 1px solid red;
    box-sizing: border-box;
`;
export const Messages = styled.div`
    flex: 1 1 calc(100% - ${p => p.theme.interface.content.create + p.theme.interface.content.info}px);
    padding: ${p => p.theme.spacing.getSize(2)};
`;

export const Create = styled.div`
    flex: 0 0 ${p => p.theme.interface.content.create}px;
    padding: ${p => p.theme.spacing.getSize(2)};
`;

export const NoChannelMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: ${p => p.theme.type.fontSize(2)};
`;
