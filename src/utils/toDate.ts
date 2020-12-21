export const toDate = (dateString: string | Date): Date | null => {
  if (dateString instanceof Date) {
    return new Date(
      dateString.getFullYear(),
      dateString.getMonth(),
      dateString.getDate()
    );
  }

  const formatOk = /[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/.test(dateString);
  if (!formatOk) {
    return null;
  }

  const parts = dateString.split("-");
  const [year, month, day] = parts.map((str) => parseInt(str, 10));

  const date = new Date(year, month - 1, day);
  return date;
};
