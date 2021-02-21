/// <reference path="../node_modules/electron/electron.d.ts" >

declare function useElectron(
  onElectron: (version: string) => any,
  noElectron: () => any
): void;

declare function useRemote(): Remote;
declare function useIpc(): IpcRenderer;
