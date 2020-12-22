import React, { useMemo } from "react";
import styles from "./App.module.css";
import { BirthdayList } from "../BirthdayList";
import { usePeople } from "../../hooks/usePeople";
import { isBirthday } from "../../utils/isBirthday";

function App() {
  const people = usePeople();
  const birthdays = useMemo(
    () =>
      people
        ? people.filter(({ dateOfBirth }) =>
            isBirthday(new Date(), dateOfBirth)
          )
        : [],
    [people]
  );

  if (!people) {
    return (
      <>
        <h1 className={styles.textCenter}>Birthdays</h1>
        <h2 className={styles.textCenter}>Loading...</h2>
      </>
    );
  }

  return (
    <>
      <h1 className={styles.textCenter}>Birthdays</h1>

      {birthdays?.length > 0 ? (
        <>
          <h2 className={styles.textCenter}>
            {birthdays.length} birthdays today.
          </h2>
          <BirthdayList people={birthdays} />
        </>
      ) : (
        <h2 className={styles.textCenter}>No birthdays today.</h2>
      )}
    </>
  );
}

export { App };
