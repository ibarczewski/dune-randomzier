import { useHistory, withRouter } from "react-router-dom";

const Navigator = () => {
    const history = useHistory();

    const changeRoute = (event) => {
        history.push(`${event.target.value}`);
    }

    return <select onChange={(event) => changeRoute(event)}>
        <option value="/">Randomizer</option>
        <option value="/reference">Reference</option>
    </select>
}

export default withRouter(Navigator);