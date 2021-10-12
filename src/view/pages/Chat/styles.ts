// Core
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/system';

// Components
import { List as MuiList, ListItem as MuiListItem, ListItemText as MuiListItemText, SpeedDial } from '@mui/material';

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 800px;
    background: radial-gradient(#0f72d4 0%, #00509f 100%);
    margin: 0 auto;
`;

export const Header = muiStyled('div')({
    display:         'flex',
    justifyContent:  'space-between',
    padding:         '12px',
    backgroundColor: '#0063c7',
});

export const HeaderTitle = muiStyled('p')({
    color:    'white',
    fontSize: 30,
});

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

export const ListItem = muiStyled(MuiListItem)({
    display:      'flex',
    alignItems:   'flex-end',
    width:        'fit-content',
    padding:      '10px 20px',
    marginBottom: '12px',
    minWidth:     '150px',
});

export const ListItemLeftside = muiStyled('div')({
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'flex-start',
    width:         'fit-content',
    marginRight:   12,
});

export const ListItemRightside = muiStyled('div')({
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'flex-end',
    justifyContent: 'flex-end',
    width:          'fit-content',
    paddingLeft:    '0',
    position:       'static',
});

export const ListItemUsername = muiStyled(MuiListItemText)({
    color:                      '#ffffff8f',
    [ ' .MuiTypography-root' ]: {
        fontSize: '14px',
    },
});

export const ListItemMessage = muiStyled(MuiListItemText)({
    color:                      'white',
    [ ' .MuiTypography-root' ]: {
        fontSize: '20px',
    },
});

export const ListItemDate = muiStyled(MuiListItemText)({
    color:                      '#ffffff6a',
    fontSize:                   '12px',
    [ ' .MuiTypography-root' ]: {
        fontSize: '12px',
    },
});

export const MessageMenu = muiStyled(SpeedDial)({
    position:                'absolute',
    top:                     -5,
    right:                   -23,
    transform:               'scale(0.7)',
    [ ' .MuiSvgIcon-root' ]: {
        fill: 'white',
    },
});
