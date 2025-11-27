//Modify component to make it dynamic. Hint: use props
export function CourseGoal() {
  return (
    <li>
      <h2>TITLE</h2>
      <p>DESCRIPTION</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Practice Time!</h1>
      <p>Course Goals</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
      </ul>
    </div>
  );
}

export default App;