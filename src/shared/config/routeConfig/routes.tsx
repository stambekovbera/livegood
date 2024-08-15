import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { FriendsPage, MainPage } from '@/pages';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';

const getElement = (element: React.ReactNode) => {
  return <Suspense fallback={<PageLoader/>}>{element}</Suspense>;
};

export const routes = createBrowserRouter([
  {
    path: '/',
    element: getElement(<MainPage/>)
  },
  {
    path: '/friends',
    element: getElement(<FriendsPage/>)
  }
]);
