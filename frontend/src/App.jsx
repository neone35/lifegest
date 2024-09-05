import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    birthDate: '',
    grandparentsAge: '',
    sleepHours: '',
    commuteHours: '',
    workHours: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-server.com/backend/index.php', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div className="App">
      <h1>Lifegest</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Birth Date:</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
        </div>
        <div>
          <label>Average Age of Grandparents:</label>
          <input type="number" name="grandparentsAge" value={formData.grandparentsAge} onChange={handleChange} />
        </div>
        <div>
          <label>Hours of Sleep per Day:</label>
          <input type="number" name="sleepHours" value={formData.sleepHours} onChange={handleChange} />
        </div>
        <div>
          <label>Hours of Commute per Day:</label>
          <input type="number" name="commuteHours" value={formData.commuteHours} onChange={handleChange} />
        </div>
        <div>
          <label>Hours of Work per Day:</label>
          <input type="number" name="workHours" value={formData.workHours} onChange={handleChange} />
        </div>
        <button type="submit">Calculate</button>
      </form>

      {result && (
        <div>
          <h2>Results</h2>
          <p>Total Weeks: {result.totalWeeks}</p>
          <p>Sleep Weeks: {result.sleepWeeks}</p>
          <p>Commute Weeks: {result.commuteWeeks}</p>
          <p>Work Weeks: {result.workWeeks}</p>
          <p>Free Time Weeks: {result.freeTimeWeeks}</p>
        </div>
      )}
    </div>
  );
}

export default App;
