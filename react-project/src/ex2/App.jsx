import React from 'react';

export const userData = {
  firstName: 'Andrey', // feel free to replace the name value
  lastName: 'Krutauz', // feel free to replace the name value
  title: 'Teacher', // feel free to replace the title value
};

// Edit the UserData component code to output the userData data
function UserData() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName + " " + userData.lastName}
      </h2>
      <p>{userData.title}</p>
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
