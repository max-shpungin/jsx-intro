"use strict";

function Tweet({ username, date, message }) {
  return (
    <div className="Tweet">
      <h2>{username} - {date}</h2>
      <b>{message}</b>
    </div>
  );
}