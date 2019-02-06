/**
 * This service defines utils methods for the application.
 * Note: Maybe, for date handling logic, depending on the project complexity maybe it could
 * be better to add a library like `momentJS`.
 */
export function formatDate(date = new Date()) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]}, ${year}`;
}

function getTwoDigits(number) {
  return `${number < 10 ? '0' : ''}${number}`
}

export function getTimesSpent(timestamp) {
  let seconds = Math.floor(timestamp / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  return `${getTwoDigits(hours)}:${getTwoDigits(minutes)}:${getTwoDigits(seconds)}`
}