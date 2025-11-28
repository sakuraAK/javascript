// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields

export const user = {
  email: '',
  password: '',
  loggedIn: false,
};


// This exercise is just about practicing event handling
function App() {

  function onClickHandle() {
    user.email = 'email@email.com';
    user.password = '12234';
    user.loggedIn = true;
    console.log(user);
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={onClickHandle}>Login</button>
      </p>
    </div>
  );
}

export default App;
