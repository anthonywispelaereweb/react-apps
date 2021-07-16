import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import "./index.css";

// Import Pages
import Home from "./pages/Home";

// Import Styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/bootstrap.min.css";
import "./styles/responsive.css";
import "./styles/style.css";


// TODO
// https://reactrouter.com/web/example/basic
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
