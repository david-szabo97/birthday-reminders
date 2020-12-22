import React from "react";
import { render, screen } from "@testing-library/react";
import { BirthdayItem } from "./";
import { Person } from "../../interfaces/Person";

describe("BirthdayItem", () => {
  it("renders item", () => {
    const date = new Date();
    const now = `${date.getFullYear() - 5}-${
      date.getMonth() + 1
    }-${date.getDate()}}`;
    const person: Person = {
      image: "images/john-doe.jpg",
      name: "John Doe",
      dateOfBirth: now,
    };
    render(<BirthdayItem {...person} />);

    const nameEle = screen.getByText(person.name);
    expect(nameEle).toBeInTheDocument();

    const imageEle = screen.getByAltText(person.name);
    expect(imageEle).toHaveAttribute("src", person.image);

    const ageEle = screen.getByText("5 years old today");
    expect(ageEle).toBeInTheDocument();
  });
});
