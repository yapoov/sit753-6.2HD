import logo from "./logo.svg";
import "./App.css";
import { SetupNotification } from "./notification";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={SetupNotification}>
          Setup and send test notification
        </button>
      </header>
    </div>
  );
}

export default App;
