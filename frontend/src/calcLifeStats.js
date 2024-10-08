// calculateLifeStats.js

const calculateLifeStats = ({ grandparentsAvgAge, sleepHours, commuteHours, workHours }) => {
    const averageLifeYears = Number(grandparentsAvgAge);
    const weeksInYear = 52;
    const totalWeeks = averageLifeYears * weeksInYear;
  
    const sleepHoursWeek = sleepHours * 7;
    const commuteHoursWeek = commuteHours * 7;
    const workHoursWeek = workHours * 7;
  
    const hoursInWeek = 168;
    const sleepWeekRatio = sleepHoursWeek / hoursInWeek;
    const commuteWeekRatio = commuteHoursWeek / hoursInWeek;
    const workWeekRatio = workHoursWeek / hoursInWeek;
  
    const sleepWeeks = totalWeeks * sleepWeekRatio;
    const commuteWeeks = totalWeeks * commuteWeekRatio;
    const workWeeks = totalWeeks * workWeekRatio;
    const cookEatWeeks = 144;
    const hygieneWeeks = 108;
  
    const freeTimeWeeks = totalWeeks - (sleepWeeks + commuteWeeks + workWeeks + cookEatWeeks + hygieneWeeks);
  
    return {
      totalWeeks: Math.floor(totalWeeks),
      sleepWeeks: Math.floor(sleepWeeks),
      commuteWeeks: Math.floor(commuteWeeks),
      workWeeks: Math.floor(workWeeks),
      cookEatWeeks: cookEatWeeks,
      hygieneWeeks: hygieneWeeks,
      freeTimeWeeks: Math.floor(freeTimeWeeks),
    };
  };
  
  export default calculateLifeStats;
  