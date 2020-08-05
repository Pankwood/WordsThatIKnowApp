import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateVideo from "./pages/create/Video";
import Page404 from "./pages/404";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/create/video" component={CreateVideo} />
      <Route path="/" component={App} exact />
      {/*<Route component={() => <div>Page 404</div>} />*/}
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
