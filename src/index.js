import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import store from "./features/store";
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';

import '@mantine/carousel/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <React.StrictMode>
      <MantineProvider >
       
        <App />
       
        </MantineProvider>
       
        <ToastContainer position="top-center" />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
