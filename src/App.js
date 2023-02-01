import React from "react";
import "./App.css";
import Table from "./components/Table";

function App(contact) {
  return (
    <div className="app-container">
      <Table key={contact.id}/>
    </div>
  );
}

export default App;
