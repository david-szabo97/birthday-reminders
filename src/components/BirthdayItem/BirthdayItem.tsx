import React from "react";
import styles from "./BirthdayItem.module.css";
import { Person } from "../../interfaces/Person";
import { getAge } from "../../utils/getAge";

type Props = Person;

const BirthdayItem: React.FC<Props> = ({ image, name, dateOfBirth }) => {
  return (
    <li className={styles.root}>
      <img className={styles.avatar} src={image} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.age}>
        {getAge(new Date(), dateOfBirth)} years old today
      </div>
    </li>
  );
};

const BirthdayItemMemoized = React.memo(BirthdayItem);

export { BirthdayItemMemoized as BirthdayItem };
