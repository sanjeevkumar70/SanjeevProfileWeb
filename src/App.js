import "./App.css";
import Home from "./components/Home";
import {Switch, Route, Redirect} from 'react-router-dom';
import About from "./components/Teaser/About";
import Skills from "./components/Education/Skills";
import Experience from "./components/Teaser/Experience";
import Project from "./components/Education/Project";
import Contact from "./components/Teaser/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Experience" component={Experience}/>
        <Route exact path="/Project" component={Project}/>
        <Route exact path="/Skills" component={Skills}/>
       <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
