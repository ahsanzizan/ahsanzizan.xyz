export function stringifyDate(time) {
    var dt = new Date(time);
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
     'July', 'August', 'September', 'October', 'November', 'December'];

    const year = dt.getFullYear();
    const month = months[dt.getMonth()];
    const date = dt.getDate();
    return `${month} ${ordinal_suffix_of(date)}, ${year}`;
}

function ordinal_suffix_of(i) {
    var j = i % 10, k = i % 100;
    if (j == 1 && k != 11) {
        return i + 'st';
    } else if (j == 2 && k != 12) {
        return i + 'nd';
    } else if (j == 3 && k != 13) {
        return i + 'rd';
    }

    return i + 'th';
}
