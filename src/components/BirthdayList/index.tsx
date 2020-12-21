import React from "react";
import styles from "./index.module.css";
import Person from "../../interfaces/Person";
import BirthdayItem from "../BirthdayItem";

type Props = {
  people: Person[];
};

const BirthdayList: React.FC<Props> = ({ people }) => {
  return (
    <ul className={styles.root}>
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
