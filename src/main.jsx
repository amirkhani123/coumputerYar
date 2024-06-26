import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import "./styles/Vazirmatn-font-face.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./meterial/theme.js";
import { BrowserRouter } from "react-router-dom";
const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
