// don't change the Component name "App"
import { useState } from "react";

export default function App() {

    const [toggleBtnClicked, updateToggleBtnClicked] = useState(false);

    function handleClick() {
        updateToggleBtnClicked(!toggleBtnClicked);
    }

    return (
        <div>
            <p className={toggleBtnClicked ? "active" : ""}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
