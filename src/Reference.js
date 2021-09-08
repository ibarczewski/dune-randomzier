import { FremenLocations } from "./FremenLocations";
import { Leaders } from "./Leaders";
import { StormRandomizer } from "./StormRandomizer"
import { BrowserRouter as Router, Switch, Route, Link, useHistory, withRouter } from "react-router-dom";

import { useState } from 'react';

const Reference = () => {
  const [selectedValue, setSelectedValue] = useState('leaders');
  const history = useHistory();

  const handleChange = (value) => {
    setSelectedValue(value);
    history.push(`/${value}`);
  }
  return (
    <>
      <Router>
          <div className="link-wrapper">
            <select value={selectedValue} type="combobox" onChange={(event) => handleChange(event.target.value)}>
              <option value="leaders">Leaders</option>
              <option value="fremen-locations">Fremen Locations</option>
              <option value="storm-randomizer">Storm Randomizer</option>
            </select>
            <Link to="/reference/leaders">Leaders</Link>
            <Link to="/fremen-locations">Fremen Locations</Link>
            <Link to="/storm-randomizer">Storm Randomizer</Link>
          </div>
        <Switch>
          <Route path="/reference/leaders">
            <Leaders />
          </Route>
          <Route path="/fremen-locations">
            <FremenLocations />
          </Route>
          <Route path="/reference/storm-randomizer">
            <StormRandomizer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default withRouter(Reference);
