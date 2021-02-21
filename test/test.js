import { clear, mockUserAgent } from "jest-useragent-mock";
import useElectron from "../src/useElectron";

describe("test useElectron hook", () => {
  afterEach(() => {
    clear();
  });

  it("should mock user agent", () => {
    const mockedUserAgent = "mocked-user-agent/1.0.0";
    mockUserAgent(mockedUserAgent);
    expect(window.navigator.userAgent).toEqual(mockedUserAgent);
  });

  it("should call onElectron when in user agent", done => {
    mockUserAgent("electron/11.5.3");
    useElectron(
      () => {
        done();
      },
      () => {
        fail();
      }
    );
  });

  it("should call noElectron when not in user agent", done => {
    mockUserAgent(
      "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0"
    );
    useElectron(
      () => {
        fail();
      },
      () => {
        done();
      }
    );
  });

  it("should give the good electron version", done => {
    mockUserAgent("electron/11.5.3");
    useElectron(
      v => {
        expect(v).toEqual("11.5.3");
        done();
      },
      () => {
        fail();
      }
    );
  });
});
