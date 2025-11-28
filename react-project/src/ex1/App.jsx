import React from 'react';

// DEFINE YOUR COMPONENT HERE
// Your component should output to the screen
//<p>My goal: Learn React</p>
function Goal() {
  return (
    <>
      <p>My goal: Learn React</p>
    </>
  );
}

// DO NOT EDIT THE APP COMPONENT NAME OR CONTENT

function App() {
  return (
    <div id="app">
      <h1>Practice Time!</h1>
      {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
      {/* OUTPUT YOUR COMPONENT HERE */}
      <Goal></Goal>
    </div>
  );
}

export default App;


