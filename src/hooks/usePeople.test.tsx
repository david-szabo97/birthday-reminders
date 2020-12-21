import React from "react";
import { render, screen } from "@testing-library/react";
import { usePeople } from "./usePeople";
import Person from "../interfaces/Person";

describe("usePeople hook", () => {
  it("should return null first to indicate loading state", () => {
    window.localStorage.clear();

    const Test = () => {
      const people = usePeople();
      return <div>{JSON.stringify(people)}</div>;
    };

    jest.spyOn(React, "useEffect").mockImplementationOnce(() => {});
    render(<Test />);
    jest.restoreAllMocks();

    expect(screen.getByText("null")).toBeInTheDocument();
  });

  it("should return default data if localStorage is empty", () => {
    window.localStorage.clear();

    const Test = () => {
      const people = usePeople();
      return <div>{JSON.stringify(people)}</div>;
    };

    render(<Test />);

    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(screen.getByText(/Foo Bar/)).toBeInTheDocument();
  });

  it("should return data from localStorage when it isn't empty", () => {
    const people: Person[] = [
      {
        name: "Custom 1",
        image: "",
        dateOfBirth: "2020-11-11",
      },
      {
        name: "Custom 2",
        image: "",
        dateOfBirth: "2019-11-11",
      },
    ];
    window.localStorage.setItem("people", JSON.stringify(people));

    const Test = () => {
      const people = usePeople();
      return <div>{JSON.stringify(people)}</div>;
    };

    render(<Test />);

    expect(screen.getByText(/Custom 1/)).toBeInTheDocument();
    expect(screen.getByText(/Custom 2/)).toBeInTheDocument();
  });

  it("should return empty array when can't set default data for some reason", () => {
    Storage.prototype.getItem = jest.fn(() => null);

    const Test = () => {
      const people = usePeople();
      return <div data-testid="test">{JSON.stringify(people)}</div>;
    };

    render(<Test />);

    const ele = screen.getByTestId("test");
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveTextContent("[]");
  });

  it("should return empty array when localStorage contains invalid data", () => {
    window.localStorage.setItem("people", "invalidJson");

    const Test = () => {
      const people = usePeople();
      return <div data-testid="test">{JSON.stringify(people)}</div>;
    };

    render(<Test />);

    const ele = screen.getByTestId("test");
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveTextContent("[]");
  });
});
