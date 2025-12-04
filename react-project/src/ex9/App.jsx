import Todo from './Todo'

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!',
    'Sleep',
];

// don't change the Component name "App"
export default function App() {
  
    return (<>
        <ul>
            {DUMMY_TODOS.map(todoItem => <Todo key={todoItem}>{todoItem}</Todo>)}
        </ul>
    </>);
}
