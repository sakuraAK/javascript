import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Result from "./components/Result/Result";
import { useState } from "react";
import { calculateInvestmentResults } from "../utils/investment";

export default function App() {

    const [userInput, updateUserInput] = useState({
        initialInvestment: 1500,
        expectedReturn: 5,
        annualInvestment: 100,
        duration: 5
    });

    function handleUserInputChange(newValue, fieldName) {
        updateUserInput({
            ...userInput,
            [fieldName]: newValue
      
        }
        );

        console.log(calculateInvestmentResults(userInput));
    }

    return (<>
        <Header/>
        <UserInput userInputValue={userInput} 
        onInputChange={handleUserInputChange}/>
        <Result/>
    </>);
}