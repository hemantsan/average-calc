import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import StockAverage from './pages/StockAverage/StockAverage';
import CryptoAverage from './pages/CryptoAverage/CryptoAverage';
import ErrorPage from './pages/ErrorPage';
import { json } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
      {
        path: '/',
        element: <Home />,
        handle: {
          title: 'Home',
        },
      },
      {
        path: '/stock-average',
        element: <StockAverage />,
        handle: {
          title: 'Stock Average',
        },
      },
      {
        path: '/crypto-average',
        element: <CryptoAverage />,
        handle: {
          title: 'Crypto Average',
        },
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
