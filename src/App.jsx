import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,//+newValue, zmena stringu na číslo
      };
    });
  }

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>ň
      {!inputIsValid && <p className="center">Enter valid data.</p>}
      {inputIsValid && <Results userInput={userInput}/>}
    </>
  )
}

export default App
