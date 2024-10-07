import React from 'react';

const LifeExpectancyForm = ({ formData, handleChange, handleSubmit }) => {
  // Define form fields as an array of objects
  const formFields = [
    { label: 'Birth Date', type: 'date', name: 'birthDate' },
    { label: 'Average Age of Grandparents', type: 'number', name: 'grandparentsAvgAge' },
    { label: 'Hours of Sleep per Day', type: 'number', name: 'sleepHours' },
    { label: 'Hours of Commute per Day', type: 'number', name: 'commuteHours' },
    { label: 'Hours of Work per Day', type: 'number', name: 'workHours' },
  ];

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      {formFields.map((field) => (
        <div key={field.name} className="flex items-center mb-4">
          <label className="w-1/2">{field.label}:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-1/2"
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white rounded-lg p-2 w-full"
      >
        Calculate
      </button>
    </form>
  );
};

export default LifeExpectancyForm;
