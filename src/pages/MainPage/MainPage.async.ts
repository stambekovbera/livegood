import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('');
  }, 3000);
}).then(() => import('./MainPage')));
