import React from "react";
import useElectron from "./useElectron";
import useIpc from "./useIpc";
import useRemote from "./useRemote";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank"
          href="https://github.com/"
          rel="noopener noreferrer"
          onClick={e => {
            useElectron(
              v => {
                e.preventDefault();
                console.log(`There is Electron version ${v}`);

                let { BrowserWindow } = useRemote();

                let win = new BrowserWindow();
                win.loadURL("https://github.com");
                win.show();
              },
              () => console.log("There isn't Electron")
            );
          }}
        >
          Open github
        </a>
        <a
          className="App-link"
          target="_blank"
          href="https://www.techwalla.com/articles/how-to-ping-a-server-name"
          rel="noopener noreferrer"
          onClick={e => {
            e.preventDefault();
            useElectron(
              v => {
                console.log(`There is Electron version ${v}`);

                let { invoke } = useIpc();
                invoke("ping", 3).then(res => console.log(res));
              },
              () => {
                console.log("There isn't Electron")
                console.log(`pong ${3/2}`)
              }
            );
          }}
        >
          Run ping
        </a>
      </header>
    </div>
  );
}

export default App;
