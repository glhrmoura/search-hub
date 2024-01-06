import React from 'react';

import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { UserListProvider } from '@/hooks/user-list';

import { router } from '@/routes';

import theme from '@/theme/theme';
import { Container, GlobalStyle } from '@/theme/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <UserListProvider>
          <RouterProvider router={router} />
        </UserListProvider>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
);
