import './App.css';
import './Screens/Jalome/styles/style.css';
import './Screens/Jalome/new_about/newAbout.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Screens/Jalome/Home';
import WebLayout from './Components/WebLayout';
import NewContact from './Screens/Jalome/new_contact/Contact'
import NewAbout from './Screens/Jalome/new_about/About'

function App() {



  return (
    <Router className="App">
      <Switch>
          <Route path="/about">
            <NewAbout />
          </Route>
          <Route path="/contact">
            <NewContact/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
