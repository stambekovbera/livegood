import { Box, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import theme from '@/app/themes';

import App from './app/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Box className='wrapper'>
        <App />
      </Box>
    </ThemeProvider>
  </StrictMode>,
);
