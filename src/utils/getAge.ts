import { toDate } from "./toDate";

export const getAge = (
  now: string | Date,
  dateOfBirth: string | Date
): number => {
  const nowDate = toDate(now);
  const dateOfBirthDate = toDate(dateOfBirth);

  if (
    !nowDate ||
    !dateOfBirthDate ||
    dateOfBirthDate.getTime() > nowDate.getTime()
  ) {
    return 0;
  }

  const dateOfBirthThisYearDate = new Date(dateOfBirthDate);
  dateOfBirthThisYearDate.setFullYear(nowDate.getFullYear());

  const diffInYears = nowDate.getFullYear() - dateOfBirthDate.getFullYear();
  const hadBirthday = nowDate.getTime() >= dateOfBirthThisYearDate.getTime();

  return hadBirthday ? diffInYears : diffInYears - 1;
};
