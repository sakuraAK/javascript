import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const title = 'Vite - React';

function Header() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
  </>
    
  );
}

function BulletListItem(props) {
  return (
    <>
       <li>{props.title}</li>
    </>
  );
}

function BulletList() {
  return (
    <>
      <ul>
          <BulletListItem title="Components"></BulletListItem>
          <BulletListItem title="JSX"></BulletListItem>
          <BulletListItem title="Props"></BulletListItem>
          <BulletListItem title="State"></BulletListItem>
        </ul>
    </>
  );
}


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Header></Header>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR!
        </p>
      </div>
      <p className="read-the-docs"> 
        <h3>React has 10 core concepts:</h3>
        <BulletList></BulletList>
      </p>
    </>
  );
}

export default App
