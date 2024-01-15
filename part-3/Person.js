"use strict";

function Person({ name, age, hobbies }) {
  return (
    <div>
      <p>Learn some more information about this person</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>{age >= 18 ? "please go vote!" : "you must be 18"}</p>
      <p>hobbies:</p>
      <ul>
        {hobbies.map(h => <li>{h}</li>)}
      </ul>
    </div>
  );
}