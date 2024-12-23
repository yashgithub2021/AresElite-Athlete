export function formatDateToMMDDYYY(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}/${day}/${year}`;
}

export function firstLetterUppercase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
