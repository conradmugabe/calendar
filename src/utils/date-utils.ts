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
