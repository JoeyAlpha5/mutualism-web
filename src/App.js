import './App.css';
import './Screens/Jalome/styles/style.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Screens/Jalome/Home';
import WebLayout from './Components/WebLayout';

function App() {



  return (
    <Router className="App">
      <Switch>
          <Route path="/about">
            <WebLayout page={"about"} />
          </Route>
          <Route path="/contact">
            <WebLayout page={"contact"} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
