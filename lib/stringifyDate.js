export function stringifyDate(time) {
    var dt = new Date(time);
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
     'July', 'August', 'September', 'October', 'November', 'December'];

    const year = dt.getFullYear();
    const month = months[dt.getMonth()];
    const date = dt.getDate();
    return `${month} ${date}, ${year}`;
}