/* eslint-disable no-unused-expressions */
import _ from "lodash";
import { NamePlate } from "./NamePlate";
import { useState, useEffect } from "react";
import './Randomizer.css';

const Randomizer = ({enableCheatCode}) => {
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

  const [firstPlayerName, setFirstPlayerName] = useState('');
  const [secondPlayerName, setSecondPlayerName] = useState('');
  const [thirdPlayerName, setThirdPlayerName] = useState('');
  const [fourthPlayerName, setFourthPlayerName] = useState('');
  const [fifthPlayerName, setFifthPlayerName] = useState('');
  const [sixthPlayerName, setSixthPlayerName] = useState('');

  useEffect(() => {
    if (enableCheatCode) {
      console.log('did i fire', enableCheatCode);
      setFirstPlayerName('Zoey');
      setSecondPlayerName('Matt');
      setThirdPlayerName('Ian');
      setFourthPlayerName('Ed');
      setFifthPlayerName('Joel');
      setSixthPlayerName('Zach');
    }
  }, [enableCheatCode]);

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

    const names = _.shuffle([firstPlayerName, secondPlayerName, thirdPlayerName, fourthPlayerName, fifthPlayerName, sixthPlayerName]);
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
    <div className="randomizer-wrapper">
      <div className="card-container">
      <div className="card-header">Factions to Include</div>
        <div className="house-inputs-wrapper">
          <div className="faction-checkbox"><input type="checkbox" value="beneGesserit" checked={includeAtreides} onChange={() => setIncludeAtreides(!includeAtreides)}></input><label>House Atreides</label>  </div>
          <div className="faction-checkbox"><input type="checkbox" value="beneGesserit" checked={includeHarkonnen} onChange={() => setIncludeHarkonnen(!includeHarkonnen)}></input><label>House Harkonnen</label>  </div>
          <div className="faction-checkbox"><input type="checkbox" value="beneGesserit" checked={includeBeneGesserit} onChange={() => setIncludeBeneGesserit(!includeBeneGesserit)}></input><label>Bene Gesserit</label>  </div>
          <div className="faction-checkbox"><input type="checkbox" value="beneGesserit" checked={includeFremen} onChange={() => setIncludeFremen(!includeFremen)}></input><label>Fremen</label>  </div>
          <div className="faction-checkbox"><input type="checkbox" value="beneGesserit" checked={includeEmperor} onChange={() => setIncludeEmperor(!includeEmperor)}></input><label>Emperor</label>  </div>
          <div className="faction-checkbox"><input type="checkbox" value="beneGesserit" checked={includeSpacingGuild} onChange={() => setIncludeSpacingGuild(!includeSpacingGuild)}></input><label>Spacing Guild</label>  </div>
          <div className="faction-checkbox"><input type="checkbox" value="beneGesserit" checked={includeIxian} onChange={() => setIncludeIxian(!includeIxian)}></input><label>Ixian</label>  </div>
          <div className="faction-checkbox"><input type="checkbox" value="beneGesserit" checked={includeTleilaxu} onChange={() => setIncludeTleilaxu(!includeTleilaxu)}></input><label>Tleilaxu</label></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-header">Player Names</div>
        <div className="name-inputs-wrapper">
        <input className="player-input" value={firstPlayerName} type="text" onChange={event => setFirstPlayerName(event.target.value)}/>
        <input className="player-input" value={secondPlayerName} type="text" onChange={event => setSecondPlayerName(event.target.value)}/>
        <input className="player-input" value={thirdPlayerName} type="text" onChange={event => setThirdPlayerName(event.target.value)}/>
        <input className="player-input" value={fourthPlayerName} type="text" onChange={event => setFourthPlayerName(event.target.value)}/>
        <input className="player-input" value={fifthPlayerName} type="text" onChange={event => setFifthPlayerName(event.target.value)}/>
        <input className="player-input" value={sixthPlayerName} type="text" onChange={event => setSixthPlayerName(event.target.value)}/>
        </div>
      </div>
      
      <button class="shuffle-button" onClick={() => shufflePlayers()}>Shuffle</button>
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
              key={name}
            ></NamePlate>
          ))}
        </div>
        <div className="player-wrapper">
          {playerRows.thirdRow.map(({ name, faction }) => (
            <NamePlate
              position="middle-row"
              name={name}
              faction={faction}
              key={name}
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
    </div>
  );
};

export { Randomizer };
