import { toDate } from "./toDate";

export const isBirthday = (
  now: string | Date,
  dateOfBirth: string | Date
): boolean => {
  const nowDate = toDate(now);
  const dateOfBirthDate = toDate(dateOfBirth);

  if (!nowDate || !dateOfBirthDate) {
    return false;
  }

  return (
    nowDate.getMonth() === dateOfBirthDate.getMonth() &&
    nowDate.getDate() === dateOfBirthDate.getDate()
  );
};
