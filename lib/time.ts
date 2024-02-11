export function displayRemainingTime(end: string) {
  const now = new Date();
  const endTime = new Date(end);
  const timeDifference = endTime.getTime() - now.getTime();

  if (timeDifference < 0) {
    return "00:00";
  }

  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60);

  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}
