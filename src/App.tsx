import React from "react";
import List from "./feature/task/components/List/List";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <h1>My Tasks</h1>
        </div>
        <List />
      </header>
    </div>
  );
};

export default App;
