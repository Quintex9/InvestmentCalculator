import { useState } from "react"

export default function UserInput(){
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue){
        setUserInput();
    }

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input type="number" required/>
                </p>
                <p>
                    <label>Annual investment</label>
                    <input type="number" required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required/>
                </p>
            </div>
        </section>
    )
}