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
      MuiButton,
      MuiInputBase,
      MuiDialogTitle,
      MuiDialogContent,
      MuiDialogActions,
      MuiOutlinedInput,
      MuiPagination,
      MuiBackdrop,
      MuiIconButton,
      MuiFormLabel,
    },
  },
  coreRuRu
);

export default theme;
