import React, { useMemo } from "react";
import "./App.css";
import BirthdayList from "./components/BirthdayList";
import { usePeople } from "./hooks/usePeople";
import { isBirthday } from "./utils/isBirthday";

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
      <div className="App">
        <h1>Birthdays</h1>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Birthdays</h1>

      {birthdays?.length > 0 ? (
        <>
          <h2>{birthdays.length} birthdays today.</h2>
          <BirthdayList people={birthdays} />
        </>
      ) : (
        <h2>No birthdays today.</h2>
      )}
    </div>
  );
}

export default App;
