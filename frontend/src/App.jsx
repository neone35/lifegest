import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import MainForm from "./MainForm";
import Results from "./Results";
import calcLifeStats from "./calcLifeStats";
import Footer from "./Footer";

function App() {
  const [formData, setFormData] = useState({
    birthDate: "",
    grandparentsAvgAge: "",
    sleepHours: "",
    commuteHours: "",
    workHours: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form data:", formData);
      const results = calcLifeStats(formData);
      console.log("Calculated Results:", results);
      setResult(results);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <MainForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {result && (
        <Results
          totalWeeks={result.totalWeeks}
          sleepWeeks={result.sleepWeeks}
          commuteWeeks={result.commuteWeeks}
          workWeeks={result.workWeeks}
          freeTimeWeeks={result.freeTimeWeeks}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
