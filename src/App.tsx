// import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Event } from "./pages/Event/Event";
import { Confirmation } from "./pages/Confirmation/Confirmation";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer/Footer";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route path="*" component={Home} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Routes>
    </div>
  );
};
