import { ruRU as coreRuRu } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

import { palette, typography } from './common';
import {
  MuiBackdrop,
  MuiButton,
  MuiDialogActions,
  MuiDialogContent,
  MuiDialogTitle,
  MuiFormLabel,
  MuiIconButton,
  MuiInputBase,
  MuiOutlinedInput,
  MuiPagination
} from './overrides';

const theme = createTheme(
  {
    palette,
    typography,

    components: {
      //@ts-expect-error: TODO все правильно, тайпскрипт просто ругается сам по себе
      MuiButton,
      MuiInputBase,
      //@ts-expect-error: TODO все правильно, тайпскрипт просто ругается сам по себе
      MuiDialogTitle,
      MuiDialogContent,
      MuiDialogActions,
      MuiOutlinedInput,
      MuiPagination,
      MuiBackdrop,
      MuiIconButton,
      MuiFormLabel,
      MuiDialog: {
        styleOverrides: {
          root: {
            '& > .MuiDialog-container': {
              '& > .MuiPaper-root': {
                background: 'rgba(19, 15, 38, 1)',
                padding: '16px 0 12px',
                marginLeft: '20px',
                marginRight: '20px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }
            }
          }
        }
      }
    },
  },
  coreRuRu
);

export default theme;
