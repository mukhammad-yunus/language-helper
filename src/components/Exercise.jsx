import React, { useRef, useState } from "react";
import { checkTheVal } from "../helpers/functions";

const Exercise = ({ exercises, setExercises }) => {
  if (!exercises.length) return "The End"; //When exercises are over this one shows
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * exercises.length)
  ); // Generates a random number as an index for the array
  const [isCorrect, setIsCorrect] = useState(null); // the state of the answer "null" is default state
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const inputRef = useRef(null); //Stores the input

  const handleCheck = (e) => {
    e.preventDefault(); //For the form tag
    if (isCorrect) {
      handleNext(); //When you hit ENTER it leads you to the next step
    } else {
      let inputValue = inputRef.current.value.trim(); //stores the input value
      if (!inputValue) return handleInvalidInp(); //If there is no answer but clicked the enter/check buttons, this one will take control :)
      setIsCorrect(checkTheVal(inputValue, exercises[randomNumber]));
    }
  }; //Checks the input value matches the  the answer

  const handleNext = () => {
    if (isCorrect && isShowAnswer) {
      setRandomNumber(Math.floor(Math.random() * exercises.length));
      setIsShowAnswer(false);
      inputRef.current.value = "";
      setIsCorrect(null);
    } else {
      const newArray = [];
      for (let i = 0; i < exercises.length; i++) {
        const element = exercises[i];
        if (i !== randomNumber) {
          newArray.push(element);
        }
      } // the loop saves a new array of the exercise excluding current one.
      setExercises(newArray);
      localStorage.setItem("data", JSON.stringify(newArray));
      inputRef.current.value = "";
      setRandomNumber(Math.floor(Math.random() * newArray.length));
      setIsCorrect(null);
    }
  };

  const handleInvalidInp = () => {
    console.log("Please enter a text!");
  };

  return (
    <div className="h-screen p-4 flex flex-col justify-between md:max-w-[800px] mx-auto">
      <p>Translate the sentence into Italian</p>
      <p>
        <span
          className={`${
            isCorrect ? " text-green-400" : isCorrect !== null && "text-red-500"
          } font-semibold text-xl sm:text-2xl lg:text-3xl`}
        >
          {exercises[randomNumber].english}
        </span>
        <span className="ml-3">
          {(isCorrect || isShowAnswer) && exercises[randomNumber].italian}
        </span>
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <form onSubmit={handleCheck} className="w-full xs:w-1/2">
          <input
            type="text"
            ref={inputRef}
            className=" rounded-md p-1 bg-neutral-800 pl-3 w-full placeholder:text-neutral-700 outline-none"
            placeholder="Italian"
          />
        </form>
        <div className="flex items-center w-full gap-2 font-semibold md:justify-end">
          {isCorrect ? (
            <button
              onClick={handleNext}
              className="w-full bg-neutral-700  p-1 rounded-md"
            >
              Next
            </button>
          ) : (
            <>
              <button
                onClick={handleCheck}
                className="w-1/2 bg-neutral-700  p-1 rounded-md"
              >
                Check
              </button>
                <button
                  onClick={() => setIsShowAnswer((prev) => !prev)}
                  className="w-1/2 bg-neutral-700  p-1 rounded-md bg-red-500 text-red-200"
                >
                  See the answer
                </button>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercise;
