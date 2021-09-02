import './NamePlate.css';

const NamePlate = ({name, faction, position, stormStart}) => {
    return <div className={`${position} name-plate`}>
        <div className="player-name">{name}</div>
        <div>{faction}</div>
        {stormStart ? <div className="storm-start">*storm start</div> : ''}
    </div>
}

export { NamePlate };