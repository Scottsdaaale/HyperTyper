import React from "react";
import Timer from "./Timer.js";
import { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Test({
  setCurrentUserResults,
  expiryTimestamp,
  comparisonArr,
  currentUser,
}) {
  const [userInputData, setUserInputData] = useState([]);
  // const [userAccuracy, setUserAccuracy] = useState([])
  // const [userLetter, setUserLetter] = useState([])
  const [newWpmData, setNewWpmData] = useState("");
  // const [newDate, setNewDate] = useState('')

  const time = new Date();

  time.setSeconds(time.getSeconds() + 30);
  let today = new Date();
  let minutes = String(today.getMinutes()).padStart(2, "0");
  let hours = String(today.getHours()).padStart(2, "0");
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy + "/" + hours + ":" + minutes;
  const { seconds, start, restart, isRunning } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => {
      // setNewDate(today)
      const userInputJoin = userInputData.join("");
      const unfilteredUserResultsArr = userInputJoin.split(" ");
      const userResultsArr = unfilteredUserResultsArr.filter((eachArrItem) => {
        if (eachArrItem !== "") {
          return eachArrItem;
        }
      });
      const wordsPerMin = userResultsArr.length * 2;
      console.log(userResultsArr);
      console.log(wordsPerMin);
      console.log("about to hit pry");
      fetch("http://localhost:9292/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wpmResults: wordsPerMin,
          user_id: currentUser.id,
          newDate: today,
        }),
      })
        .then((res) => res.json())
        .then((newWpmData) => {
          setNewWpmData(newWpmData);
          fetch(`http://localhost:9292/users/${currentUser.id}`)
            .then((res) => res.json())
            .then((user) => {
              setCurrentUserResults(user.results);
            });
        });
      window.open("http://localhost:5050/results", "_self");
    },
  });

  const letterSpan = comparisonArr.map((eachLetter, index) => {
    return <span key={index}>{eachLetter}</span>;
  });
  function handleOnInput(e) {
    const userInput = e.target.value.split("");
    const spanDiv = document.getElementById("text-display-box");
    const arrayQuote = spanDiv.querySelectorAll("span");
    arrayQuote.forEach((characterSpan, index) => {
      // const accuracyCompArr = []
      // const wrongInput = []
      // const wrongLetters = []

      const currentLetter = userInput[index];
      if (currentLetter == null) {
        characterSpan.classList.remove("correct");
        characterSpan.classList.remove("incorrect");
      } else if (currentLetter === characterSpan.innerText) {
        characterSpan.classList.add("correct");
        characterSpan.classList.remove("incorrect");
      } else if (currentLetter !== characterSpan.innerText) {
        characterSpan.classList.add("incorrect");
        characterSpan.classList.remove("correct");
        // wrongInput.copyWithin(userInput[index])
        // // wrongLetters.concat(wrongInput)     <---- attempt to collect typing accuracy
        // console.log(wrongInput)
      } else {
        alert("this will probably never alert, lol"); // lol
      }
    });
    setUserInputData(userInput);
  }

  return (
    <div id="timer-and-test-container">
      <Timer seconds={seconds} isRunning={isRunning} />
      <div className="testContainer">
        <div id="text-display-box" className="textDisplayBox">
          {letterSpan}
        </div>
        <textarea
          id="text-area"
          className="textArea"
          onKeyDown={start}
          onInput={handleOnInput}
        ></textarea>
      </div>
    </div>
  );
}

export default Test;

// letterSpan
// const resultsOfComparison = userInput.map((eachLetter)=>{
//   if (eachLetter === comparisonArr.map((eachCharacter)=>{
//     return eachCharacter
//   })){
//     // console.log("it was successfull")
//     // return classCorrect = true
//   } else {
//     // console.log("poopy")
//   }
// })
