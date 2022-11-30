import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navigation from "./components/Navigation";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Navigation children={<App />} />
    </ChakraProvider>
  </React.StrictMode>
);
