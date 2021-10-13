// Core
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { styled as muiStyled } from '@mui/system';

// Components
import { Button } from '@mui/material';

interface KeyboardGridRowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    keyAmount: number
    gridTemplateColumn?: string
}

export const KeyboardGrid = styled.div`
    display: grid;
    grid-template: repeat(6, 1fr) / 1fr;
    grid-row-gap: 4px;
    width: 100%;
    max-height: 350px;
`;

export const KeyboardGridRow = styled.div<KeyboardGridRowProps>`
    display: grid;
    grid-gap: 4px;
    
    ${({ keyAmount, gridTemplateColumn }) => css`
        grid-template-columns: ${gridTemplateColumn ? gridTemplateColumn : `repeat(${keyAmount}, 1fr)`};
    `}
`;

export const Key = muiStyled(Button)({
    height:        '50px',
    minWidth:      'auto',
    textTransform: 'none',
    color:         'white',
    border:        '3px outset #4287cf',
    [ '&:hover' ]: {
        borderStyle: 'inset',
    },
});
