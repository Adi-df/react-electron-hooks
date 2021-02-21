import { IpcRenderer } from "electron";

export default function useIpc(): IpcRenderer {
  if (/electron\/(\d+\.\d+\.\d+)/i.test(navigator.userAgent)) {
    let electron = window.require("electron");
    if (!electron.ipcRenderer) {
      throw new Error("Be sure that enableRemoteMenu is to true");
    }
    return electron.ipcRenderer;
  } else {
    throw new Error(
      "Not inside a electron process, please use useElectron to ensure that!"
    );
  }
}
