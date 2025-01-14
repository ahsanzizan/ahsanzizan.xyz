import { Variants } from "framer-motion";

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

export function calculateReadTime(content: string) {
  const WPM = 225;
  const wordCount = content.trim().split(/\s+/).length;
  const timeInMinutes = Math.ceil(wordCount / WPM);
  return timeInMinutes;
}

export function getFormattedDate(date?: Date) {
  if (!date) {
    return "";
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function truncateString(content: string, threshold: number) {
  if (content.length <= threshold) return content;

  return content.slice(0, threshold) + "...";
}

export function isInteger(value: string) {
  return /^\d+$/.test(value);
}

export const introVariants: Variants = {
  hide: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 100,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
