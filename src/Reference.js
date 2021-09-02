import { FremenLocations } from "./FremenLocations";
import { Leaders } from "./Leaders";
import { StormRandomizer } from "./StormRandomizer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Reference = () => {
  return (
    <>
      <Router>
          <div className="link-wrapper">
            <Link to="/leaders">Leaders</Link>
            <Link to="/fremen-locations">Fremen Locations</Link>
            <Link to="/storm-randomizer">Storm Randomizer</Link>
          </div>
        <Switch>
          <Route path="/leaders">
            <Leaders />
          </Route>
          <Route path="/fremen-locations">
            <FremenLocations />
          </Route>
          <Route path="/storm-randomizer">
            <StormRandomizer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export { Reference };
