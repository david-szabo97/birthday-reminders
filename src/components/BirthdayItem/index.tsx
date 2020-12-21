import React from "react";
import Person from "../../interfaces/Person";
import { getAge } from "../../utils/getAge";

type Props = Person;

const BirthdayItem: React.FC<Props> = ({ image, name, dateOfBirth }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div>{getAge(new Date(), dateOfBirth)} years</div>
    </li>
  );
};

export default React.memo(BirthdayItem);
