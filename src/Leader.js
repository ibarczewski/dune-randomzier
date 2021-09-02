import './Leader.css';

const Leader = ({leaders, houseName}) => {
    return <div className="leader-wrapper">
        <div className="house-name">{houseName}</div>
        {leaders.map(({name, power}) => <div>{name} - {power}</div>)}
    </div>
}

export { Leader }