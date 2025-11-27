import React from 'react';

export const userData = {
  firstName: 'Your Name', // feel free to replace the name value
  lastName: 'Your Last Name', // feel free to replace the name value
  title: 'Strudent', // feel free to replace the title value
};

// Edit the UserData component code to output the userData data
function UserData() {
  return (
    <div id="user" data-testid="user">
      <h2>
        TODO: FIRST NAME LAST NAME
      </h2>
      <p>TODO: TITLE</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>Practice Time!</h1>
      <p></p>
      <UserData />
    </div>
  );
}

export default App;
