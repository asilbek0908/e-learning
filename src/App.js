// importing pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import CourseDetail from "./pages/CourseDetail";
// import Global style
import GLobalStyle from "./components/GlobalStyle";

// import style
import "./style.css";

// Router
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="App">
      <Nav />
      <GLobalStyle />
      <AnimatePresence mode="wait">
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/courses" exact>
            <Courses />
          </Route>
          <Route path="/courses/:id">
            <CourseDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
