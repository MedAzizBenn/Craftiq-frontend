
import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./containers/App";
import { GlobalStyle } from "./global-styles";
import RoutesManager from "./routesManager"
import Header from "./components/header"

const wrapperStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
  };
  const theme = {
    isLVStyle: true,
  };
const AppLauncher = () => (
      <>

        <GlobalStyle />
        <Header></Header>
        <RoutesManager/>
        </>

  );
const container = document.getElementById("app")!;
const root = ReactDOMClient.createRoot(container);
root.render(<AppLauncher />);
