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
    grid-template: repeat(5, 1fr) / 1fr;
    grid-row-gap: 1px;
    width: 100%;
    max-height: 350px;
    margin: 8px 0;
`;

export const KeyboardGridRow = styled.div<KeyboardGridRowProps>`
    display: grid;
    grid-gap: 1px;
    
    ${({ keyAmount, gridTemplateColumn }) => css`
        grid-template-columns: ${gridTemplateColumn ? gridTemplateColumn : `repeat(${keyAmount}, 1fr)`};
    `}
`;

export const Key = muiStyled(Button)({
    wordBreak:     'break-all',
    fontSize:      '14px',
    height:        '50px',
    lineHeight:    '1',
    padding:       '2px',
    minWidth:      'auto',
    textTransform: 'none',
    color:         'white',
    border:        '3px outset #4287cf',
    [ '&:hover' ]: {
        borderStyle: 'inset',
    },

});
