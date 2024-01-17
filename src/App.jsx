import React, { useEffect, useState } from "react";
import Exercise from "./components/Exercise";
import InputFile from "./components/InputFile";

const App = () => {
  const [exercises, setExercises] = useState(()=>{
    const data = localStorage.getItem('data')
    if(data === null) return []
    return JSON.parse(data)
  });
  return (
    <div className=" bg-neutral-900 text-neutral-400 m-0 p-0 h-screen text-center">
      {exercises.length ? <Exercise exercises={exercises} setExercises={setExercises}/> : <InputFile setExercises={setExercises}/>}
      {/* <Exercise exercises={exercises} setExercises={setExercises} /> */}

    </div>
  );
};

export default App;
