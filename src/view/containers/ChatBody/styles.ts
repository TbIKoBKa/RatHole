// Core
import { styled as muiStyled } from '@mui/system';

// Components
import { List as MuiList, ListSubheader as MuiListSubheader } from '@mui/material';

export const List = muiStyled(MuiList)({
    width:                      '100%',
    position:                   'relative',
    overflow:                   'auto',
    height:                     '100%',
    padding:                    '24px',
    marginTop:                  5,
    [ '&::-webkit-scrollbar' ]: {
        width: '1em',
    },
    [ '&::-webkit-scrollbar-thumb' ]: {
        backgroundColor: '#107be8',
        borderRadius:    10,
        outline:         '1px solid #0f6fd1',
    },
});

export const ListSubheader = muiStyled(MuiListSubheader)({
    width:           'fit-content',
    lineHeight:      0,
    padding:         '16px 10px',
    borderRadius:    '6px',
    backgroundColor: '#0f6fd1',
    color:           '#ffffff9a',
    margin:          '0 auto 12px',
});
