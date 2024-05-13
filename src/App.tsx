import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import { SignUp } from "./pages/Signup";

const App: React.FC = () => (
  <BrowserRouter>
    <SignUp/>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
