import Person from "../interfaces/Person";

const date = new Date();

export const people: Person[] = [
  {
    name: "John Doe",
    image: "https://i.pravatar.cc/150?u=john-doe",
    dateOfBirth: "1997-11-27",
  },

  {
    name: "Foo Bar",
    image: "https://i.pravatar.cc/150?u=foo-bar",
    dateOfBirth: `2000-${date.getMonth() + 1}-${date.getDate()}`,
  },
];
