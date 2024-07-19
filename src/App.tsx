import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/app/store";
import RouteConfig from "./routes/RouteConfig";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouteConfig />
        <h1>Hello</h1>
      </Provider>
    </>
  );
}

export default App;
