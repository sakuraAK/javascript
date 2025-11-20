import './App.css'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton.jsx'
import { useState } from 'react'


import { CORE_CONCEPTS, EXAMPLES } from "./data.js"

function App() {
 
  const [examplePanelContent, updateExamlePanelContet] = useState("Select core concept");



  function handleClick(buttonName) {
        console.log('Button clicked');
        updateExamlePanelContet(EXAMPLES[buttonName].code);
        console.log(examplePanelContent);
  }

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
                <TabButton onSelect={() => handleClick('components')}>{EXAMPLES['components'].title}</TabButton>
                <TabButton onSelect={() => handleClick('jsx')}>{EXAMPLES['jsx'].title}</TabButton>
                <TabButton onSelect={() => handleClick('props')}>{EXAMPLES['props'].title}</TabButton>
                <TabButton onSelect={() => handleClick('state')}>{EXAMPLES['state'].title}</TabButton>
            </menu>
            <code>{examplePanelContent}</code>
          </section>

      </main>
    </>
  );
}

export default App;
