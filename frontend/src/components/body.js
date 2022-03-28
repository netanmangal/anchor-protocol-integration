import {handleFetchDepositTransactions} from "../utils/helper.js";

function Body ({state, setState, toast}) {
    return (
        <div style={{paddingBottom: "50px"}}>
            <h2>Anchor Protocol - Deposit Transactions</h2>
            <form onSubmit={(event) => handleFetchDepositTransactions(event, toast, state)}>
            <input placeholder="Username" type="text" onChange={(event) => {setState({...state, username: event.target.value})}} /> <br />
            <input placeholder="Password" type="text" onChange={(event) => {setState({...state, password: event.target.value})}} /> <br />
            <button type='submit'>Fetch my transactions</button>
            </form>
        </div>
    );
}

export default Body;