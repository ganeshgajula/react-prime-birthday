import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [finalMsg, setFinalMsg] = useState("");

  function inputChangeHandler(event) {
    let newInputValue = event.target.value;
    setInputValue(newInputValue);
  }

  function dateChangeHandler(event) {
    let newDateValue = event.target.value;
    setInputDate(newDateValue);
  }

  function checkHandler() {
    if (inputDate) {
      let birthDay = inputDate;
      var split = birthDay.split("/");
      var date = split[0];
      var month = split[1];

      if (isNaN(parseInt(date))) {
        alert("Please enter a valid DOB");
      } else {
        if (date >= 1 && date <= 31 && month >= 1 && month <= 12) {
          if (date >= 30 && month == 2) {
            alert("Please enter a valid date");
          } else {
            var count = 0;
            for (var i = 2; i < date; i++) {
              if (date % i == 0) {
                count++;
              }
            }
            if (count == 0) {
              let resultText =
                "Congratulations your birthday is a prime number. Thank you for playing!!";
              setFinalMsg(resultText);
            } else {
              let resultText =
                "Seems like your birthday is not a prime number. Thank you for playing!!";
              setFinalMsg(resultText);
            }
          }
        } else {
          alert("Please enter a valid a DOB");
        }
      }
    } else {
      alert("Please Enter your DOB");
    }
  }

  return (
    <div className="App">
      <h1>Let's check whether your birthday is a prime number.</h1>
      <input
        onChange={inputChangeHandler}
        type="text"
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "1px solid black"
        }}
        placeholder="Enter your name"
      />

      <div
        className="greetingMsg"
        style={{ padding: "1rem", fontWeight: "bold" }}
      >
        {" "}
        Welcome {inputValue}
      </div>
      <h2>Please enter your DOB</h2>
      <input
        onChange={dateChangeHandler}
        type="text"
        placeholder="Enter DOB in DD/MM"
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "1px solid black"
        }}
      />
      <button
        onClick={checkHandler}
        style={{
          display: "block",
          margin: "2rem auto",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "1px solid black"
        }}
      >
        Check
      </button>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{finalMsg}</div>
    </div>
  );
}
