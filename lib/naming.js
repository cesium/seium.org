export function getFirstName(fullName) {
  const names = fullName.split(" ");

  if (names.length > 0) {
    return names[0];
  }

  return "";
}
