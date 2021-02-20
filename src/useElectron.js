export default function useElectron(onElectron, noElectron) {
  if (/electron\/(\d+\.\d+\.\d+)/i.test(navigator.userAgent)) {
    onElectron(/electron\/(\d+\.\d+\.\d+)/i.exec(navigator.userAgent)[1]);
  } else {
    noElectron();
  }
}
