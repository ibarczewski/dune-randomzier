import "./App.css";
import { NamePlate } from "./NamePlate";
import * as _ from "lodash";

function App() {
  const names = ["Zoey", "Ian", "Joel", "Zach", "Matt", "Ed"];
  const shuffledFactions = _.shuffle([
    "Atreides",
    "Harkonnen",
    "Spacing Guild",
    "Emperor",
    "Fremen",
    "Bene Gesserit",
    "Tleilaxu",
    "Ixian",
  ]);
  const assignments = [];

  names.forEach((name) => {
    const faction = shuffledFactions.pop();
    assignments.push({ name, faction });
  });

  const topRow = assignments[0];
  const secondRow = [assignments[1], assignments[2]];
  const thirdRow = [assignments[3], assignments[4]];
  const bottomRow = assignments[5];

  return (
    <div className="App">
      <header>Dune Randomizer</header>
      <div className="player-wrapper">
        {
          <NamePlate
            position="top-row"
            name={topRow.name}
            faction={topRow.faction}
          ></NamePlate>
        }
      </div>
      <div className="player-wrapper">
        {secondRow.map(({ name, faction }) => (
          <NamePlate
            position="middle-row"
            name={name}
            faction={faction}
          ></NamePlate>
        ))}
      </div>
      <div className="player-wrapper">
        {thirdRow.map(({ name, faction }) => (
          <NamePlate
            position="middle-row"
            name={name}
            faction={faction}
          ></NamePlate>
        ))}
      </div>
      <div className="player-wrapper">
        {
          <NamePlate
            position="bottom-row"
            name={bottomRow.name}
            faction={bottomRow.faction}
            stormStart={true}
          ></NamePlate>
        }
      </div>
    </div>
  );
}

export default App;
