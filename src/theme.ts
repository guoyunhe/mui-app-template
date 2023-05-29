import { responsiveFontSizes } from '@mui/material';
import { createCompactTheme } from 'mui-material-compact';

const theme = responsiveFontSizes(createCompactTheme({}), { factor: 3 });

export default theme;
