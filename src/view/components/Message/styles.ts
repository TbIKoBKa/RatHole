// Core
import { styled as muiStyled } from '@mui/system';

// Components
import { ListItem as MuiListItem, ListItemText as MuiListItemText, SpeedDial } from '@mui/material';

export const Message = muiStyled(MuiListItem)({
    display:      'flex',
    alignItems:   'flex-end',
    width:        'fit-content',
    padding:      '10px 20px',
    marginBottom: '12px',
    minWidth:     '150px',
    maxWidth:     '100%',
});

export const MessageLeftside = muiStyled('div')({
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'flex-start',
    width:         'fit-content',
    marginRight:   12,
});

export const MessageRightside = muiStyled('div')({
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'flex-end',
    justifyContent: 'flex-end',
    width:          'fit-content',
    paddingLeft:    '0',
    position:       'static',
});

export const MessageUsername = muiStyled(MuiListItemText)({
    color:                      '#ffffff8f',
    [ ' .MuiTypography-root' ]: {
        fontSize: '14px',
    },
});

export const MessageText = muiStyled(MuiListItemText)({
    color: 'white',

    [ ' .MuiTypography-root' ]: {
        fontSize:  '20px',
        wordBreak: 'break-all',
    },
});

export const MessageDate = muiStyled(MuiListItemText)({
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
