/*
Black Friday discount behavior:
- Choose a random integer percent between 25 and 75 (inclusive) when the button is clicked.
- Inside the existing App component, add a state value (useState) to store the current discount percent.
- Add an onClick handler on the "Apply Discount" button that generates the random percent and updates state.
- Ensure the discount percent is rendered in the component (for example: "25% off" or show the new discounted price).
*/


import { useState } from 'react';


export default function App() {
    return (
        <div>
            <p data-testid="price">$100</p>
            <button>Apply Discount</button>
        </div>
    );
}
