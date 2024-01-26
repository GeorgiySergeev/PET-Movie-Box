export function convertMinutesToHoursAndMinutes(minutes) {
  if (isNaN(minutes) || minutes < 0) {
    return 'Invalid input';
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}hr${' : '}${remainingMinutes}min`;
}
