export function getMonthView(
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  numberOfWeeks = 5,
) {
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
