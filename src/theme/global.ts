import styled, { createGlobalStyle } from 'styled-components';

import MontserratRegular from '@/assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from '@/assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '@/assets/fonts/Montserrat-Bold.ttf';
import MontserratExtraBold from '@/assets/fonts/Montserrat-ExtraBold.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    src: url(${MontserratRegular})  format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    src: url(${MontserratSemiBold})  format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 700;
    src: url(${MontserratBold})  format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 800;
    src: url(${MontserratExtraBold})  format('truetype');
  }
    
  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.gray300};
  }
  
  a {
    text-decoration: none;
  }
  
  body {
    margin: 0px;
    font-size: 14px;
    font-family: 'Montserrat';
    background-color: ${({ theme }) => theme.colors.gray700};
  }

  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.gray600};
    padding: ${({ theme }) => theme.spacing.sml}px ${({ theme }) => theme.spacing.mdl}px;
  }

  .pagination {
    display: flex;
    gap: 2px;
    max-width: 100%;
  }

  .pagination > li {
    display: inline-block;
    padding-left: 0;
  }
  
  .pagination > li.page-item a {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray300};

    &:hover {
      color: ${({ theme }) => theme.colors.gray300};
    }
  }

  .pagination > li a:hover {
    background-color: transparent;
  }

  .pagination > li {
    overflow: hidden;
    padding: initial 10px;
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.spacing.sml}px;

    &:hover {
      border-color: ${({ theme }) => theme.colors.gray600};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.blue400};
    }
  }
  
  .page-item .page-link {
    border: none;
    background-color: transparent !important;
  }

  .Toastify * {
    font-family: 'Montserrat';
  }
`;

export const Container = styled.div`
  width: 500px;
  display: flex;
  max-width: 100%;
  margin: 0px auto; 
  align-items: center;
  justify-content: center;
  padding: 42px ${({ theme }) => theme.spacing.base}px;
`;