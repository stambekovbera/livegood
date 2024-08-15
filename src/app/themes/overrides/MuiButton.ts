import { palette } from '../common';

export default {
  styleOverrides: {
    root: {
      minHeight: '0',
      height: 'auto',
      padding: '12px 12px',
      boxShadow: 'none',
      textTransform: 'none',
      borderRadius: '16px',
    },
    contained: {
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '19px',
    },
    outlined: {
      borderColor: palette.primary.main,
      color: palette.primary.main,
      backgroundColor: 'white'
    }
  }
};
