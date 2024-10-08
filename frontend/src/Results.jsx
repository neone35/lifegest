import React from "react";

const Results = ({
  totalWeeks,
  sleepWeeks,
  commuteWeeks,
  workWeeks,
  freeTimeWeeks,
}) => {
  const colors = {
    sleep: "bg-blue-400",
    commute: "bg-yellow-400",
    work: "bg-red-400",
    freeTime: "bg-green-400",
  };

  const renderWeeks = () => {
    const weeks = [];
    for (let i = 0; i < totalWeeks; i++) {
      let colorClass = colors.freeTime;

      if (i < sleepWeeks) {
        colorClass = colors.sleep;
      } else if (i < sleepWeeks + commuteWeeks) {
        colorClass = colors.commute;
      } else if (i < sleepWeeks + commuteWeeks + workWeeks) {
        colorClass = colors.work;
      }

      weeks.push(<div key={i} className={`w-2 h-2 ${colorClass} m-0.5`} />);
    }
    return weeks;
  };

  // Use Math.round to remove decimals from the values
  const roundedResults = {
    totalWeeks: Math.round(totalWeeks),
    sleepWeeks: Math.round(sleepWeeks),
    commuteWeeks: Math.round(commuteWeeks),
    workWeeks: Math.round(workWeeks),
    freeTimeWeeks: Math.round(freeTimeWeeks),
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4">
        Your Life Distribution{"  "}
        <span className="text-base font-normal mb-4">
          total {roundedResults.totalWeeks} weeks
        </span>
      </h2>
      <div className="flex flex-wrap">{renderWeeks()}</div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">
          Legend{" "}
          <span className="text-base font-normal mb-4">
            one year is 52 weeks
          </span>
        </h3>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-400 mr-2"></div>
            <span>Sleep - {roundedResults.sleepWeeks} weeks</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 mr-2"></div>
            <span>Commute - {roundedResults.commuteWeeks} weeks</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-400 mr-2"></div>
            <span>Work - {roundedResults.workWeeks} weeks</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 mr-2"></div>
            <span>Free Time - {roundedResults.freeTimeWeeks} weeks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
