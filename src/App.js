import "./App.css";
import { Randomizer } from './Randomizer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reference from "./Reference";
import Navigator from "./Navigator";
import Resolver from "./Resolver";
import { useState } from 'react';

function App() {
  const [cheatCodeCount, setCheatCodeCount] = useState(0);

  return (
    <div className="App">
      <header onClick={() => { setCheatCodeCount(cheatCodeCount + 1); console.log(cheatCodeCount + 1);}}>Dune Randomizer</header>

      <Router>
        <Navigator />
        <Switch>
          <Route path='/reference' >
            <Reference />
          </Route>
          <Route path='/resolver' >
            <Resolver />
          </Route>
          <Route path='/' >
            <Randomizer enableCheatCode={cheatCodeCount >= 6 ? true : false} />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
