export function isToday(date: Date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

export function isCurrentMonth(date: Date) {
  const today = new Date();
  return (
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

export function isCurrentYear(date: Date) {
  const today = new Date();
  return date.getFullYear() === today.getFullYear();
}

export function getNextDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

export function getPrevDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
}

export function getNextWeek(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
}

export function getPrevWeek(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
}

export function getNextMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

export function getPrevMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
}

export function getNextYear(date: Date) {
  return new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
}

export function getPrevYear(date: Date) {
  return new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
}

export function convertTo12Hour(currentHour: number): string {
  const hour = currentHour % 12 || 12;
  const period = currentHour < 12 ? "AM" : "PM";
  return `${hour} ${period}`;
}

export function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours}:${minutes}`;
  return time;
}
