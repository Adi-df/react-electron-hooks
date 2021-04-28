# 3 tiny hooks for electron
Provide 3 tiny hook to simplify electron use in react js.

## useElectron
When the electron user agent is there, call ```onElectron``` else call ```noElectron```
#### Definition:
```typescript
useElectron(onElectron: v: string => any, noElectron: () => any): void
```
#### Exemple: 
```javascript
import { useElectron } from "react-electron-hooks";

export default function ExempleComponent() {
  useElectron(
    v => console.log(`There is electron ${v}`),
    () => console.log("There isn't electron...")
  );

  return <div></div>;
}
```
## useIpc
Return ipcRenderer from ```require("electron")```
#### Definition:
```typescript
useIpc(): IpcRenderer
```
#### Exemple: 
```javascript
import { useElectron, useIpc } from "react-electron-hooks";

export default function ExempleComponent() {
  useElectron(
    v => {
      console.log(`There is electron ${v}`);
      
      const { invoke } = useIpc();
      
      invoke("ping").then(pong => console.log(pong));
    },
    () => console.log("There isn't electron...")
  );

  return <div></div>;
}
```

## useRemote
Return remote object from ```require("electron")``` and throw an error if electron user agent not there or even if remote is undifined (enableRemoteMenu to false). Remember that the remote object is deprecated due to high security problem
#### Definition:
```typescript
useRemote(): Remote
```
#### Exemple: 
```javascript
import { useElectron, useRemote } from "react-electron-hooks";

export default function ExempleComponent() {
  useElectron(
    v => {
      console.log(`There is electron ${v}`);
      
      const { BrowserWindow } = useRemote();
      
      let win = new BrowserWindow();
      win.loadURL("https://github.com/");
      win.show();
    },
    () => console.log("There isn't electron...")
  );

  return <div></div>;
}
```
