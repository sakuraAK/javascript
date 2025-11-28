const goals = [
  {
    title: 'Learn React',
    description: 'In-Depth',
  },
  {
    title: 'Learn React Features',
    description: 'Hooks, etc...',
  },
  {
    title: 'React Environment Setup',
    description: 'Be able to setup dev environment...',
  },
];

//Modify component to make it dynamic. Hint: use props
export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
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
        <CourseGoal title={goals[0].title} description={goals[0].description}></CourseGoal>
        <CourseGoal title={goals[1].title} description={goals[1].description}/>
        <CourseGoal title={goals[2].title} description={goals[2].description}/>
      </ul>
    </div>
  );
}

export default App;