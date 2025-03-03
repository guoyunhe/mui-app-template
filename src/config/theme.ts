import { createCompactTheme } from 'material-compact';

export const light = createCompactTheme({ palette: { mode: 'light' } });
export const dark = createCompactTheme({
  palette: { mode: 'dark' },
});

export const themes = { light, dark };
