export function getMonthView(month = new Date().getMonth(), numberOfWeeks = 5) {
  const year = new Date().getFullYear();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  let currentMonthCount = 0 - firstDayOfMonth;
  const daysMatrix = new Array(numberOfWeeks).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return new Date(year, month, currentMonthCount);
    });
  });
  return daysMatrix;
}
