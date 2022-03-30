const axios = require("axios");

export const handleFetchDepositTransactions = async (event, toast, state, setState) => {
    event.preventDefault();
    toast("Fetching transactions...", {
        autoClose: 2000
    });

    try {
        const response = await axios.post(state.apiURL + "/user/getDepositDetails", {
            "username": state.username,
            "password": state.password
        });
        console.log(response);

        if (response.status == 200) {
            setState({
                ...state, 
                listDepositTrans: response.data.response
            })
            toast.success("Request completed");
        } else {
            throw new Error({message: response});
        }

    } catch (e) {
        console.log(e.message);
        toast.error("Error occured");
    }
}

export const handlePerformDepositIntoAnchor = async (event, toast, state, setState) => {
    event.preventDefault();
    toast("Performing transactions...", {
        autoClose: 2000
    });

    try {
        const response = await axios.post(state.apiURL + "/anchor/depositUSTintoAnchor", {
            "username": state.username,
            "password": state.password,
            "amount": state.amount
        });
        console.log(response);

        if (response.status == 200) {
            toast.success("Txn completed");
        } else {
            throw new Error({message: response});
        }

        
    } catch (e) {
        console.log(e.message);
        toast.error("Error occured");
    }
}