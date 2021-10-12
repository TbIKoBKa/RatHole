// Core
import { styled as muiStyled } from '@mui/system';

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
