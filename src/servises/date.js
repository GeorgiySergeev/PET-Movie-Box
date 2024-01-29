export const dateFormating = str => {
  return new Date(str).getFullYear().toString();
};

export function formatDate(inputDate) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = new Date(inputDate).toLocaleDateString(
    'en-US',
    options
  );
  return formattedDate;
}
