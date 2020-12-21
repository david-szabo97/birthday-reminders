import { isBirthday } from "./isBirthday";
import { toDate } from "./toDate";

describe("isBirthday()", () => {
  it("should return boolean", () => {
    const date = toDate("2020-11-22") as Date;
    expect(isBirthday(date, date)).toBe(true);
  });

  it("should return true if both arguments are the same day", () => {
    const now = toDate("2020-11-22") as Date;
    const dateOfBirth = toDate("2020-11-22") as Date;
    expect(isBirthday(now, dateOfBirth)).toBe(true);
  });

  it("should return false if arguments aren't the same day", () => {
    const now = toDate("2020-11-22") as Date;
    const dateOfBirth = toDate("2020-11-23") as Date;
    expect(isBirthday(now, dateOfBirth)).toBe(false);
  });

  it("should return false if now argument is incorrectly formatted", () => {
    const now = toDate("2020.11-22") as Date;
    const dateOfBirth = toDate("2020-11-22") as Date;
    expect(isBirthday(now, dateOfBirth)).toBe(false);
  });

  it("should return false if dateOfBirth argument is incorrectly formatted", () => {
    const now = toDate("2020-11-22") as Date;
    const dateOfBirth = toDate("2020.11-22") as Date;
    expect(isBirthday(now, dateOfBirth)).toBe(false);
  });
});
