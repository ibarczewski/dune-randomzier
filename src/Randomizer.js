/* eslint-disable no-unused-expressions */
import _ from "lodash";
import { NamePlate } from "./NamePlate";
import { useState } from "react";

const Randomizer = () => {
  const [hasShuffled, setHasShuffled] = useState(false);
  const [playerRows, setPlayerRows] = useState({});
  const [includeAtreides, setIncludeAtreides] = useState(true);
  const [includeHarkonnen, setIncludeHarkonnen] = useState(true);
  const [includeBeneGesserit, setIncludeBeneGesserit] = useState(true);
  const [includeFremen, setIncludeFremen] = useState(true);
  const [includeEmperor, setIncludeEmperor] = useState(true);
  const [includeSpacingGuild, setIncludeSpacingGuild] = useState(true);
  const [includeIxian, setIncludeIxian] = useState(false);
  const [includeTleilaxu, setIncludeTleilaxu] = useState(false);

  const shufflePlayers = () => {
    const factions = [];
    
    includeAtreides ? factions.push("House Atreides") : () => {};
    includeHarkonnen ? factions.push("House Harkonnen") : () => {};
    includeSpacingGuild ? factions.push("Spacing Guild") : () => {};
    includeEmperor ? factions.push("Emperor") : () => {};
    includeFremen ? factions.push("Fremen") : () => {};
    includeBeneGesserit ? factions.push("Bene Gesserit") : () => {};
    includeIxian ? factions.push("House Ixian") : () => {};
    includeTleilaxu ? factions.push("House Tleilaxu") : () => {};

    const names = _.shuffle(["Zoey", "Ian", "Joel", "Zach", "Matt", "Ed"]);
    const shuffledFactions = _.shuffle(factions);
    const assignments = [];

    names.forEach((name) => {
      const faction = shuffledFactions.pop();
      assignments.push({ name, faction });
    });

    setPlayerRows(
      {
        firstRow: assignments[0],
        secondRow: [assignments[1], assignments[2]],
        thirdRow: [assignments[3], assignments[4]],
        bottomRow: assignments[5],
      }
    )
    setHasShuffled(true);
  };

  return (
    <>
      <div>
        <input type="checkbox" value="beneGesserit" checked={includeAtreides} onChange={() => setIncludeAtreides(!includeAtreides)}></input><label>House Atreides</label>  
        <input type="checkbox" value="beneGesserit" checked={includeHarkonnen} onChange={() => setIncludeHarkonnen(!includeHarkonnen)}></input><label>House Harkonnen</label>  
        <input type="checkbox" value="beneGesserit" checked={includeBeneGesserit} onChange={() => setIncludeBeneGesserit(!includeBeneGesserit)}></input><label>Bene Gesserit</label>  
        <input type="checkbox" value="beneGesserit" checked={includeFremen} onChange={() => setIncludeFremen(!includeFremen)}></input><label>Fremen</label>  
        <input type="checkbox" value="beneGesserit" checked={includeEmperor} onChange={() => setIncludeEmperor(!includeEmperor)}></input><label>Emperor</label>  
        <input type="checkbox" value="beneGesserit" checked={includeSpacingGuild} onChange={() => setIncludeSpacingGuild(!includeSpacingGuild)}></input><label>Spacing Guild</label>  
        <input type="checkbox" value="beneGesserit" checked={includeIxian} onChange={() => setIncludeIxian(!includeIxian)}></input><label>Ixian</label>  
        <input type="checkbox" value="beneGesserit" checked={includeTleilaxu} onChange={() => setIncludeTleilaxu(!includeTleilaxu)}></input><label>Tleilaxu</label>

      </div>
      
      <button onClick={() => shufflePlayers()}>Shuffle</button>
      { hasShuffled 
      ? 
      <>
        <div className="player-wrapper">
          {
            <NamePlate
              position="top-row"
              name={playerRows.firstRow.name}
              faction={playerRows.firstRow.faction}
            ></NamePlate>
          }
        </div>
        <div className="player-wrapper">
          {playerRows.secondRow.map(({ name, faction }) => (
            <NamePlate
              position="middle-row"
              name={name}
              faction={faction}
            ></NamePlate>
          ))}
        </div>
        <div className="player-wrapper">
          {playerRows.thirdRow.map(({ name, faction }) => (
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
              name={playerRows.bottomRow.name}
              faction={playerRows.bottomRow.faction}
              stormStart={true}
            ></NamePlate>
          }
        </div>
      </>
      : ''}
    </>
  );
};

export { Randomizer };
