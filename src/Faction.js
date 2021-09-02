const Faction = ({includeFaction, setIncludeFaction, name}) => {
    return <div className="faction-checkbox">
    <input
      type="checkbox"
      checked={includeFaction}
      onChange={() => setIncludeFaction(!includeFaction)}
    ></input>
    <label>{name}</label>{" "}
  </div>
}

export {Faction};