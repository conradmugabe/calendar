const numberOfDaysInWeek = 7;

export function getMonthView(
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  numberOfWeeks = 5,
) {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  let currentMonthCount = 0 - firstDayOfMonth;
  const daysMatrix = new Array(numberOfWeeks).fill([]).map(() => {
    return new Array(numberOfDaysInWeek).fill(null).map(() => {
      currentMonthCount++;
      return new Date(year, month, currentMonthCount);
    });
  });
  return daysMatrix;
}

export function getWeekView(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay();
  let currentWeekCount = 0 - dayOfWeek;
  const daysMatrix = new Array(numberOfDaysInWeek).fill(null).map(() => {
    currentWeekCount++;
    return new Date(year, month, dayOfMonth + currentWeekCount - 1);
  });
  return daysMatrix;
}
