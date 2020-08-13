import styled from 'styled-components';

export const Wrapper = styled.div`
    border-top: 1px solid ${p => p.theme.colors.border};
    margin-top: ${p => p.theme.spacing.getSize(4)};
    padding-top: ${p => p.theme.spacing.getSize(4)};
    padding-bottom: ${p => p.theme.spacing.getSize(4)};
`;

export const InputGroup = styled.div`
    display: flex;
    height: ${p => p.theme.spacing.getSize(8)};
    border: 1px solid ${p => p.theme.colors.border};
`;

export const Input = styled.input`
    border: none;
    background: none;
    border-right: 1px solid ${p => p.theme.colors.border};
    width: 100%;
    padding: 0 ${p => p.theme.spacing.getSize(3)};
    color: ${p => p.theme.colors.text};
    outline: none;
`;
export const Button = styled.button`
    border: none;
    background: none;
    width: ${p => p.theme.spacing.getSize(8)};
    color: ${p => p.theme.colors.text};
    outline: none;
`;

export const ErrorMessage = styled.div`
    color: red;
    margin-top: ${(p) => p.theme.spacing.getSize(1)};
`;
