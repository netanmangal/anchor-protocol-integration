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
        const response = await axios.post(state.apiURL + "/user/createOrderId", {
            "username": state.username,
            "password": state.password,
            "amount": state.amount
        });
        console.log(response);

        if (response.status == 200) {
            const options = {
                key: 'rzp_test_YWZj0cnPOWJpyc',
                amount: state.amount,
                name: "Netizaq - Anchor",
                description: "Test trans",
                order_id: response.data.msg.id,
                image: 'https://netizaq-token.netanmangal.me/static/media/logo.e5253454.png',
                handler: async function(response) {
                    console.log(response);
                    const res = await axios.post(state.apiURL + "/anchor/payment/success", {
                        ...response,
                        order_id: response.data.msg.id
                    });
                    console.log(res);
                },
                prefill: {
                    name: state.username,
                    contact: '9999999999',
                    email: 'test@netanmangal.me'
                },
                notes: {
                    username: state.username, 
                },
                theme: {
                    color: 'blue',
                    hide_topbar: false
                }
            };

            var rzp1 = new window.Razorpay(options);
            rzp1.open();

            toast.success("Txn completed");
        } else {
            throw new Error({message: response});
        } 
    } catch (e) {
        console.log(e.message);
        toast.error("Error occured");
    }
}