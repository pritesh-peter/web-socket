import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";
const ENDPOINT = "http://localhost:4001";



function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);

    });
    
  }, []);
  return (
    <div>
<p>
      It's <time dateTime={response}>{response}</time>
    </p>
      <img src="https://srdb.com.np/image/data/common/logo_2020.png" alt=""></img>
    </div>
  );
}

export default App;
