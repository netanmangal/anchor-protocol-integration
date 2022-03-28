const axios = require("axios");

export const handleFetchDepositTransactions = async (event, toast, state) => {
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

        toast.success("Txn completed");
    } catch (e) {
        console.log(e.message);
        toast.error("Error occured");
    }
}