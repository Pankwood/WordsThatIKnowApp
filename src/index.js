import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page404 from "./pages/404";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import { LocaleContextProvider } from "./LocaleContext.js";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

ReactDOM.render(
  <LocaleContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} exact />
        {/*<Route component={() => <div>Page 404</div>} />*/}
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </LocaleContextProvider>,
  document.getElementById("root")
);
