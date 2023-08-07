import React from "react";
import { useState } from "react";
import CVFORM from "./components/form";
import DisplayInfo from "./components/info";
import "./App.css";
function App() {
  const [showForm, setForm] = useState(true);
  const [FormData, setFormData] = useState(null);

  const handleformSubmit = (data) => {
    setFormData(data);
    setForm(false);
  };

  const handleEditform = () => {
    setForm(true);
  };
  return (
    <div className="App">
      {showForm ? (
        <CVFORM onSubmit={handleformSubmit} />
      ) : (
        <DisplayInfo data={FormData} edit={handleEditform} />
      )}
    </div>
  );
}

export default App;
