import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  return (
    <Fragment>
      <Header />
      <Auth/>
      <Counter />
      
    </Fragment>
  );
}

export default App;
