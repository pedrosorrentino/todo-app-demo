export function calculateTimeDifference(targetDate: string): string {
  const currentDate = new Date();
  const target = new Date(targetDate);
  const timeDifference = target.getTime() - currentDate.getTime();
  const millisecondsInDay = 1000 * 60 * 60 * 24;

  if (timeDifference < 0) {
    return 'Expired';
  }

  const daysDifference = Math.ceil(timeDifference / millisecondsInDay);

  if (daysDifference <= 1) {
    return 'Expired in 1 day';
  } else if (daysDifference <= 7) {
    return `Expired in ${daysDifference} days`;
  } else {
    const monthsDifference = Math.ceil(daysDifference / 30);
    return `Expired in ${monthsDifference} month${monthsDifference > 1 ? 's' : ''}`;
  }
}
