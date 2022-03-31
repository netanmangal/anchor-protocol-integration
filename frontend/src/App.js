import { useState, useEffect } from 'react';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import logo from './logo.png';
import './App.css';
import Body from "./components/body.js";

function App() {
  let [state, setState] = useState({
    apiURL: "http://localhost:3001",
    username: "",
    password: "",
    amount: 0,
    listDepositTrans: [],
    ustAvailable: 0
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    const init = async () => {
      const response = await axios.get(state.apiURL + "/anchor/getBalance");
      console.log("-->");
      console.log(response);
      setState({
        ...state,
        ustAvailable: (JSON.parse(response.data.balanceRes)).balances[0].account_balance
      })
    }

    init();
}, []);

  return (
    <div className="App">
      <div className="App-body">
        <img style={{marginTop: "50px"}} src={logo} className="App-logo" alt="logo" />
        <h5>Made By: <a href="https://www.linkedin.com/in/netanmangal" target="_blank" rel="noreferrer noopener">Netan Mangal</a></h5>

        <Body state={state} setState={setState} toast={toast} />

        <ToastContainer style={{fontSize: "1rem", width: "30rem"}} position="top-right" theme="dark" autoClose={3000} />
      </div>
    </div>
  );
}

export default App;
