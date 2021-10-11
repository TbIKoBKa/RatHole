// Core
import styled from 'styled-components';

// Components
import { TextField as MuiTextField } from '@mui/material';

export const RegistrationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 28px;
    background-color: #00002f;
    opacity: 0.3;
    border-radius: 12px;
    transition: opacity .2s;
    &:hover {
        opacity: 0.8;
    }
`;

export const Label = styled.p`
    margin-bottom: 6px;
    color: white;
    font-size: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const TextField = styled(MuiTextField)`
    background-color: #939393;
    border-radius: 14px;
`;
