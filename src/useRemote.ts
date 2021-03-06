import { Remote } from "electron";

export default function useRemote(): Remote {
  if (/electron\/(\d+\.\d+\.\d+)/i.test(navigator.userAgent)) {
    let electron = window.require("electron");
    if (!electron.remote) {
      throw new Error("Be sure that enableRemoteMenu is to true");
    }
    return electron.remote;
  } else {
    throw new Error(
      "Not inside a electron process, please use useElectron to ensure that!"
    );
  }
}
