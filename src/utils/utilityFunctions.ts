export function getMonthName(month: number) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[month];
}

export function stringifyDate(date: Date) {
  const year = date.getFullYear(),
    month = getMonthName(date.getMonth()),
    day = date.getDate();
  return `${month} ${day}, ${year}`;
}

// Will return the read time in minutes
export function calculateReadTime(content: string) {
  const WPM = 225;
  const wordCount = content.trim().split(/\s+/).length;
  const timeInMinutes = Math.ceil(wordCount / WPM);
  return timeInMinutes;
}
