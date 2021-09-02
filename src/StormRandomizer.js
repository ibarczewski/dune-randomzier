import { useState } from "react";
import './StormRandomizer.css';

const StormRandomizer = () => {
    const [firstPlayerNumber, setFirstPlayerNumber] = useState(null);
    const [secondPlayerNumber, setSecondPlayerNumber] = useState(null);

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      
    const randomizeStorm = () => {
        setFirstPlayerNumber(getRandomInt(0, 21));
        setSecondPlayerNumber(getRandomInt(0, 21));
    }

    return <>
        <div class="storm-randomizer-wrapper">
            <button onClick={randomizeStorm}>Randomize The Storm</button>
            <div className="randomizer-movement">Move the Storm</div>
            <div className="total">{firstPlayerNumber + secondPlayerNumber}</div>
            <div>spaces in a counter-clockwise direction.</div>
            <div className="player-rolls-wrapper">
                <div className="roll-wrapper">
                    <div>First player dialed: </div>
                    <div className="roll-number">{firstPlayerNumber}</div>
                </div>
                <div className="roll-wrapper">
                    <div>Second player dialed: </div>
                    <div className="roll-number">{secondPlayerNumber}</div>
                </div>
            </div>
        </div>
    </>
}

export {StormRandomizer};