import Footer from "./components/Footer/Footer";
import Fullscreen from "./components/Fullscreen/Fullscreen";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/Fullscreen" component={Fullscreen}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
