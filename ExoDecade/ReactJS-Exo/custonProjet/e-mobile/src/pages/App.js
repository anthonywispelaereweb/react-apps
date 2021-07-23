import { Fragment } from "react";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import NavigationRoute from "../Routes";
const App = () => {
  return (
    <Fragment>
      <Header />
      <NavigationRoute />
      <Footer />
    </Fragment>
  );
};
export default App;
