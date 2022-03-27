import {ToastContainer, toast} from "react-toastify";

import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <img style={{marginTop: "50px"}} src={logo} className="App-logo" alt="logo" />
        <h5>Made By: <a href="https://www.linkedin.com/in/netanmangal" target="_blank" rel="noreferrer noopener">Netan Mangal</a></h5>

        <ToastContainer style={{fontSize: "1rem", width: "30rem"}} position="top-right" theme="dark" autoClose={3000} />
      </div>
    </div>
  );
}

export default App;
