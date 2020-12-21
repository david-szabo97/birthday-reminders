import ReactDOM from "react-dom";

describe("Entrypoint", () => {
  it("calls render", async () => {
    const spy = jest.spyOn(ReactDOM, "render");
    spy.mockImplementationOnce(() => {});
    await import("./index");
    expect(spy).toBeCalledTimes(1);
  });
});
