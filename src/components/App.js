
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text"  onKeyUp={(event)=>setMessage(`Hello ${event.target.value}!`)}/>
        <p>{message}</p>
    </div>
  )
}

export default App
