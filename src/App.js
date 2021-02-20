import React from "react";
import useElectron from "./useElectron";
import useRemote from "./useRemote";

import logo from "./logo.svg";
import "./App.css";

function App() {
  useElectron(
    v => {
      console.log(`There is Electron version ${v}`);
      let { BrowserWindow } = useRemote();

      let win = new BrowserWindow();
      win.loadURL("https://github.com");
      win.show();
    },
    () => console.log("There isn't Electron")
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
