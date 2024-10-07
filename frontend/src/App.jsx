import React, { useState } from "react";
import axios from "axios";
import MainForm from './MainForm';

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
      <h1>Lifegest</h1>
      <MainForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {result && (
        <div>
          <h2>Results</h2>
          <p>Total Weeks: {result.totalWeeks || "N/A"}</p>
          <p>Sleep Weeks: {result.sleepWeeks || "N/A"}</p>
          <p>Commute Weeks: {result.commuteWeeks || "N/A"}</p>
          <p>Work Weeks: {result.workWeeks || "N/A"}</p>
          <p>Free Time Weeks: {result.freeTimeWeeks || "N/A"}</p>
        </div>
      )}
    </div>
  );
}

export default App;
