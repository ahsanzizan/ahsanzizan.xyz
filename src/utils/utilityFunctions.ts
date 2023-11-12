export function stringifyDate(date: Date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = date.getFullYear(), month = months[date.getMonth()], day = date.getDate();
    return `${month} ${date}, ${year}`;
}

// Will return the read time in minutes
export function calculateReadTime(content: string) {
    const WPM = 225;
    const wordCount = content.trim().split(/\s+/).length;
    const timeInMinutes = Math.ceil(wordCount / WPM);
    return timeInMinutes;
}