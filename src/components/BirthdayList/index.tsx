import React from "react";
import Person from "../../interfaces/Person";
import BirthdayItem from "../BirthdayItem";

type Props = {
  people: Person[];
};

const BirthdayList: React.FC<Props> = ({ people }) => {
  return (
    <ul>
      {people.map((person) => (
        <BirthdayItem
          key={`${person.name}-${person.dateOfBirth}`}
          {...person}
        />
      ))}
    </ul>
  );
};

export default React.memo(BirthdayList);
