import './App.css'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton.jsx'


import { CORE_CONCEPTS, EXAMPLES } from "./data.js"

function App() {
  return (
    <>   
      <Header/>
      <main>
          <section id="core-concepts">
            <h2>Core concepts</h2>
            <ul>
                <CoreConcept 
                  image={CORE_CONCEPTS[0].image} 
                  title={CORE_CONCEPTS[0].title} 
                  description={CORE_CONCEPTS[0].description}/>
                <CoreConcept {...CORE_CONCEPTS[1]}/>
                <CoreConcept {...CORE_CONCEPTS[2]}/>
                <CoreConcept {...CORE_CONCEPTS[3]}/>
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton>{EXAMPLES['components'].title}</TabButton>
                <TabButton>{EXAMPLES['jsx'].title}</TabButton>
                <TabButton>{EXAMPLES['props'].title}</TabButton>
                <TabButton>{EXAMPLES['state'].title}</TabButton>
            </menu>
            <code>{EXAMPLES['components'].code}</code>
          </section>

      </main>
    </>
  );
}

export default App;
