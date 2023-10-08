import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { render, screen, userEvent } from "../utils/test-utils";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/Default Route/i)).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    userEvent.click(screen.getByLabelText("Increment value"));
    expect(await screen.findByText(/2/i)).toBeInTheDocument();
  });

  /*
  it('uses flexbox in app header', async () => {
    render(<App />)
    const element = screen.getByRole('banner')
    expect(element.className).toEqual('App-header')
    expect(getComputedStyle(element).display).toEqual('flex')
  })
  */
});
