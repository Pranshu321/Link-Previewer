import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {

  const [link, setlink] = useState("");
  const [error, seterror] = useState("");
  const [logo, setlogo] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUT7GtJnnbwRMx-c96411LhFti_Q5yaBMPw&usqp=CAU");
  const [loading, setloading] = useState(null);

  function handlesubmit() {
    const reponsedata = [
      {
        "link": link
      }
    ];

    setloading(true);
    axios.post('http://localhost:4000/', reponsedata).then(res => { setloading(null); setlogo(res.data) }).catch(error => seterror("Invalid URL Please Enter Valid URL"));
    setlink("");

  }

  return (
    <div className="App">
      <header className="App-header">
        {loading ? <div class="lds-dual-ring"></div> : <img src={logo} width={400} alt="logo" />}
        <p>
          Paste the link to preview.
        </p>
        <input type={"text"} style={{ padding: '15px 30px', width: '40%', borderRadius: '10px', fontWeight: '600', outline: 'none', fontSize: '20px' }} required={true} onChange={(e) => { setlink(e.target.value) }} value={link} name='link' id='link' placeholder='Link'></input>
        <div>
          <p style={{ color: 'red' }}>{error !== "" ? error : ""}</p>
          <button style={{ padding: '20px 40px', fontSize: '20px', width: '100%', marginTop: '30px', cursor: 'pointer', background: 'black', color: 'white', fontWeight: '700', borderRadius: '12px', border: '2px solid white' }} onClick={handlesubmit}>Submit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
