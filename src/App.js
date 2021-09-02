import "./App.css";
import { Randomizer } from './Randomizer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Reference } from "./Reference";

function App() {
  

  return (
    <div className="App">
      <header>Dune Randomizer</header>

      <Router>
        <div className="link-wrapper">
          <Link to="/">Randomizer</Link>
          <Link to="/reference">Reference</Link>
        </div>
        <Switch>
          <Route path='/reference' >
            <Reference />
          </Route>
          <Route path='/' >
            <Randomizer />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
