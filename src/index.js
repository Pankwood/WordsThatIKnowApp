import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateVideo from "./pages/create/Video";
import Page404 from "./pages/404";
import Home from "./pages/Home/Home";
import CreateCategory from "./pages/create/category";
import Contact from "./pages/Contact";
import { LocaleContextProvider } from "./LocaleContext.js";

ReactDOM.render(
  <LocaleContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/create/video" component={CreateVideo} />
        <Route path="/create/category" component={CreateCategory} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} exact />
        {/*<Route component={() => <div>Page 404</div>} />*/}
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </LocaleContextProvider>,
  document.getElementById("root")
);
