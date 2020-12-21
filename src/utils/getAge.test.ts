import { getAge } from "./getAge";
import { toDate } from "./toDate";

describe("getAge()", () => {
  it("should return number", () => {
    const now = toDate("2021-11-22") as Date;
    const dateOfBirth = toDate("2020-11-22") as Date;
    expect(getAge(now, dateOfBirth)).toBe(1);
  });

  it("should return correct age when already had birthday in the year", () => {
    const now = toDate("2020-11-29") as Date;
    const dateOfBirth = toDate("2000-11-27") as Date;
    expect(getAge(now, dateOfBirth)).toBe(20);
  });

  it("should return correct age when didn't have birthday in the year", () => {
    const now = toDate("2020-11-22") as Date;
    const dateOfBirth = toDate("2000-11-27") as Date;
    expect(getAge(now, dateOfBirth)).toBe(19);
  });

  it("should return 0 if dateOfBirth is after now", () => {
    const now = toDate("2021-11-22") as Date;
    const dateOfBirth = toDate("2022-11-22") as Date;
    expect(getAge(now, dateOfBirth)).toBe(0);
  });

  it("should return 0 if dateOfBirth is incorrectly formatted", () => {
    const now = toDate("2021-11-22") as Date;
    const dateOfBirth = toDate("2020.11-22") as Date;
    expect(getAge(now, dateOfBirth)).toBe(0);
  });

  it("should return 0 if now is incorrectly formatted", () => {
    const now = toDate("2021.11-22") as Date;
    const dateOfBirth = toDate("2020-11-22") as Date;
    expect(getAge(now, dateOfBirth)).toBe(0);
  });
});
