export const ListDeposit = ({state}) => {
    return (
        <div class="scrolling-wrapper">
            {   
                state.listDepositTrans.length > 0 && 
                state.listDepositTrans.map((x) => <Card ele={x} />)
            }
        </div>
    );
}

function Card ({ele}) {
    return (
        <div class="card">
            <p>deposited on: {(new Date(ele.depositedOn).toISOString())}</p>
            <p>Amount: {ele.depositAmount}</p>
        </div>
    );
}