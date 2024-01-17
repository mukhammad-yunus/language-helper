export function checkTheVal(inputValue, exercises){
    const valueIndex = inputValue.length - 1;
    const answerIndex = exercises.italian.length - 1;
    const answerEnding = exercises.italian[answerIndex]
    const isEndTheSame = inputValue[valueIndex] === answerEnding;
    
    if (isEndTheSame) {
      return (inputValue.toLowerCase() === exercises.italian.toLowerCase());
    }else{
      const valueTheSameEnding = inputValue + answerEnding
      return (valueTheSameEnding.toLowerCase() === exercises.italian.toLowerCase());
    }
}
