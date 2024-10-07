import React, { useState } from "react";
import axios from "axios";

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
      <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center mb-4">
          <label className="w-1/2">Birth Date:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-1/2"
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/2">Average Age of Grandparents:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-1/2"
            type="number"
            name="grandparentsAvgAge"
            value={formData.grandparentsAvgAge}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/2">Hours of Sleep per Day:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-1/2"
            type="number"
            name="sleepHours"
            value={formData.sleepHours}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/2">Hours of Commute per Day:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-1/2"
            type="number"
            name="commuteHours"
            value={formData.commuteHours}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/2">Hours of Work per Day:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-1/2"
            type="number"
            name="workHours"
            value={formData.workHours}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white rounded-lg p-2"
        >
          Calculate
        </button>
      </form>

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
