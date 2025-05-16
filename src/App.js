import logo from "./logo.svg";
import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
  return (
    <div className="App">
      <h1>Test app</h1>
      <h1>Привет, {WebApp.initDataUnsafe.user?.first_name}!</h1>
      <button onClick={() => WebApp.close()}>Закрыть</button>
    </div>
  );
}

export default App;
