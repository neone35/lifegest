import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import MainForm from "./MainForm";
import Results from "./Results";

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
      const response = await axios.post(
        "http://lifegest.duckdns.org/backend/index.php",
        formData
      );
      console.log("API Response:", response.data);
      setResult(response.data);
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
    </div>
  );
}

export default App;
