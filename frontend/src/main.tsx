import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const GlobalStyle = createGlobalStyle`
  *{
    background-color: #17004D;
    color: #DED7DC;
    box-sizing: border-box;
    font-family: 'Public Sans', sans-serif;
  }

  body, html, h1, h2, h3, h4, h5, h6, ul, li {
    margin: 0;
    padding: 0;
  }

  main{
    padding: 0 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style-type: none;
    width: 150px;
  }
`;

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
