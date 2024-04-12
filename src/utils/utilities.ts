import { Variants } from "framer-motion";
import connectDB from "../lib/mongoose";

// Utility function for performing a query with mongoose,
// because the 'await connectDB()' line are required in
// every queries
export async function connectAndQuery(queryFn: () => Promise<any>) {
  await connectDB();
  return queryFn();
}

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
  },
  show: {
    opacity: 100,
    transition: {
      duration: 0.3,
    },
  },
};
