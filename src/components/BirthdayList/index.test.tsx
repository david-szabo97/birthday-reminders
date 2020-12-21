import React from "react";
import { render, screen } from "@testing-library/react";
import Person from "../../interfaces/Person";
import BirthdayList from "./";

describe("BirthdayList", () => {
  it("renders list of people", () => {
    const date = new Date();
    const fiveYearsAgo = `${date.getFullYear() - 5}-${
      date.getMonth() + 1
    }-${date.getDate()}}`;
    const eightYearsAgo = `${date.getFullYear() - 8}-${
      date.getMonth() + 1
    }-${date.getDate()}}`;
    const people: Person[] = [
      {
        image: "images/john-doe.jpg",
        name: "John Doe",
        dateOfBirth: fiveYearsAgo,
      },
      {
        image: "images/foo-bar.jpg",
        name: "Foo Bar",
        dateOfBirth: eightYearsAgo,
      },
    ];
    render(<BirthdayList people={people} />);

    const checks = [
      { person: people[0], age: 5 },
      { person: people[1], age: 8 },
    ];
    for (const { person, age } of checks) {
      const nameEle = screen.getByText(person.name);
      expect(nameEle).toBeInTheDocument();

      const imageEle = screen.getByAltText(person.name);
      expect(imageEle).toHaveAttribute("src", person.image);

      const ageEle = screen.getByText(`${age} years`);
      expect(ageEle).toBeInTheDocument();
    }
  });
});
