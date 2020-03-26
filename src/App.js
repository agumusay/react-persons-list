import React from "react";
import "./styles/App.scss";
import data from "./data/data.json";

//Logos
import List from "./components/list";
function App() {
  return (
    <div className="App">
      <h1>People List</h1>
      <List data={data} />
    </div>
  );
}

export default App;
