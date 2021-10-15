// Core
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/system';

// Components
import { TextField as MuiTextField, Button as MuiButton } from '@mui/material';

export const RegistrationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 28px 34px;
    background: linear-gradient(to bottom, #003c78, #034587);
    border-radius: 12px;
    transition: opacity .2s;
`;

export const Label = styled.p`
    text-align: center;
    margin-bottom: 6px;
    color: white;
    font-size: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const TextField = muiStyled(MuiTextField)({
    background:   '#939393',
    borderRadius: 4,
    marginBottom: 8,
});

export const Button = muiStyled(MuiButton)({
    background:    '#006bd7',
    [ '&:hover' ]: {
        background: '#004e9e',
    },
});
