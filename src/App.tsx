import React from "react";
import "./App.css";
import List from "./components/List/List";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>My Tasks</p>
        <List />
      </header>
    </div>
  );
};

export default App;
