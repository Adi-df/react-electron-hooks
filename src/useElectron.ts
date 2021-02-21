export default function useElectron(
  onElectron: (version: string) => any,
  noElectron: () => any
): void {
  if (/electron\/(\d+\.\d+\.\d+)/i.test(navigator.userAgent)) {
    onElectron(/electron\/(\d+\.\d+\.\d+)/i.exec(navigator.userAgent)[1]);
  } else {
    noElectron();
  }
}
