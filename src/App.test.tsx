import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Person from "./interfaces/Person";

const date = new Date();
const fiveYearsAgo = `${date.getFullYear() - 5}-${
  date.getMonth() + 1
}-${date.getDate()}}`;
const personWithBirthday: Person = {
  image: "images/john-doe.jpg",
  name: "John Doe",
  dateOfBirth: fiveYearsAgo,
};
const eightYearsAgoPlusOneDay = `${date.getFullYear() - 8}-${
  date.getMonth() + 1
}-${date.getDate() + 1}}`;
const personWithoutBirthday: Person = {
  image: "images/foo-bar.jpg",
  name: "Foo Bar",
  dateOfBirth: eightYearsAgoPlusOneDay,
};
const person2WithBirthday: Person = {
  image: "images/john-doe-2.jpg",
  name: "John Doe 2",
  dateOfBirth: fiveYearsAgo,
};

describe("App", () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it("renders birthday list", () => {
    window.localStorage.setItem(
      "people",
      JSON.stringify([personWithBirthday, personWithoutBirthday])
    );
    render(<App />);

    const nameEle = screen.getByText(personWithBirthday.name);
    expect(nameEle).toBeInTheDocument();

    const imageEle = screen.getByAltText(personWithBirthday.name);
    expect(imageEle).toHaveAttribute("src", personWithBirthday.image);

    const ageEle = screen.getByText("5 years");
    expect(ageEle).toBeInTheDocument();
  });

  it("should not contain people with no birthday today", () => {
    window.localStorage.setItem(
      "people",
      JSON.stringify([personWithBirthday, personWithoutBirthday])
    );
    render(<App />);

    const nameEle = screen.queryByText(personWithoutBirthday.name);
    expect(nameEle).not.toBeInTheDocument();

    const imageEle = screen.queryByAltText(personWithoutBirthday.name);
    expect(imageEle).not.toBeInTheDocument();

    const ageEle = screen.queryByText("8 years");
    expect(ageEle).not.toBeInTheDocument();
  });

  it("should say no birthdays today if no one has birthday today", () => {
    window.localStorage.setItem(
      "people",
      JSON.stringify([personWithoutBirthday])
    );

    render(<App />);

    const textEle = screen.getByText("No birthdays today.");
    expect(textEle).toBeInTheDocument();
  });

  it("should show how many birthdays there are today (1 birthday)", () => {
    window.localStorage.setItem(
      "people",
      JSON.stringify([personWithBirthday, personWithoutBirthday])
    );

    render(<App />);

    const textEle = screen.getByText(/1 birthdays today/i);
    expect(textEle).toBeInTheDocument();
  });

  it("should show how many birthdays there are today (2 birthdays)", () => {
    window.localStorage.setItem(
      "people",
      JSON.stringify([
        personWithBirthday,
        personWithoutBirthday,
        person2WithBirthday,
      ])
    );

    render(<App />);

    const textEle = screen.getByText(/2 birthdays today/i);
    expect(textEle).toBeInTheDocument();
  });
});
