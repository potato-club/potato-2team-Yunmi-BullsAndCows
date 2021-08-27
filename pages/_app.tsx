import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../src/store/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
