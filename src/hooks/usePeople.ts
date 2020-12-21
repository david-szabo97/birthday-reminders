import { useEffect, useState } from "react";
import Person from "../interfaces/Person";
import { people as defaultPeople } from "../data/people";

export const usePeople = () => {
  const [people, setPeople] = useState<Person[] | null>(null);

  useEffect(() => {
    if (!window.localStorage.getItem("people")) {
      window.localStorage.setItem("people", JSON.stringify(defaultPeople));
    }

    const peopleJson = window.localStorage.getItem("people") || "";

    let people: Person[] = [];
    try {
      people = JSON.parse(peopleJson);
    } catch (err) {}

    setPeople(people);
  }, []);

  return people;
};
