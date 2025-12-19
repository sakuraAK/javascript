export default function UserInput({userInputValue, onInputChange}) {
    return (<>
        <section id="user-input">
            <div className="input-group">
                <label>Initial Investment</label>
                <input 
                    type="number" 
                    onChange={(event) => onInputChange(event.target.value, "initialInvestment")} 
                    value={userInputValue.initialInvestment}
                />
                <label>Annual Investment</label>
                <input 
                    type="number" 
                    onChange={(event) => onInputChange(event.target.value, "annualInvestment")}  
                    value={userInputValue.annualInvestment}
                />
            </div> 
            <div className="input-group">
                <label>Expected Return</label>
                <input 
                    type="number" 
                    onChange={(event) => onInputChange(event.target.value, "expectedReturn")}  
                    value={userInputValue.expectedReturn}
                />
                <label>Duration</label>
                <input 
                    type="number" 
                    onChange={(event) => onInputChange(event.target.value, "duration")}   
                    value={userInputValue.duration}
                />
            </div> 

        </section>

    </>);
}