import "./body.css";
import {handleFetchDepositTransactions, handlePerformDepositIntoAnchor} from "../utils/helper.js";
import {ListDeposit} from "../components/listDeposit.js";

function Body ({state, setState, toast}) {
    return (
        <div style={{paddingBottom: "50px"}}>
            <h2>User - List Deposit Transactions</h2>
            <form onSubmit={(event) => handleFetchDepositTransactions(event, toast, state, setState)}>
            <input placeholder="Username" type="text" onChange={(event) => {setState({...state, username: event.target.value})}} /> <br />
            <input placeholder="Password" type="text" onChange={(event) => {setState({...state, password: event.target.value})}} /> <br />
            <button type='submit'>Fetch my transactions</button>
            </form>

            <br />

            {
                state.listDepositTrans.length > 0 && 
                <ListDeposit state={state} />
            }

            <br />
            <br />

            <h2>Anchor Protocol - Perform Deposit</h2>
            <form onSubmit={(event) => handlePerformDepositIntoAnchor(event, toast, state)}>
            <input placeholder="Username" type="text" onChange={(event) => {setState({...state, username: event.target.value})}} /> <br />
            <input placeholder="Password" type="text" onChange={(event) => {setState({...state, password: event.target.value})}} /> <br />
            <input placeholder="Deposit Amount (in UST)" type="text" onChange={(event) => {setState({...state, amount: event.target.value})}} /> <br />
            <button type='submit'>Fetch my transactions</button>
            </form>
        </div>
    );
}

export default Body;