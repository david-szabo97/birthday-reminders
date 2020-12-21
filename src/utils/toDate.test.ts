import { toDate } from "./toDate";

describe("toDate()", () => {
  it("should return Date object when correct date string given", () => {
    const date = toDate("2020-11-22");
    expect(date).toBeInstanceOf(Date);
  });

  it("should set year", () => {
    const date = toDate("2020-11-22");
    expect(date?.getFullYear()).toBe(2020);
  });

  it("should set month", () => {
    const date = toDate("2020-11-22");
    expect(date?.getMonth()).toBe(10);
  });

  it("should set date", () => {
    const date = toDate("2020-11-22");
    expect(date?.getDate()).toBe(22);
  });

  it("should allow passing a Date object as input", () => {
    const date = toDate(new Date(2020, 11, 22, 5, 30, 15));
    expect(date?.getFullYear()).toBe(2020);
    expect(date?.getMonth()).toBe(11);
    expect(date?.getDate()).toBe(22);
  });

  it("should return null if string is incorrectly formatted", () => {
    expect(toDate("2020.11.22")).toBeNull();
    expect(toDate("2020-211-22")).toBeNull();
    expect(toDate("20201122")).toBeNull();
  });
});
