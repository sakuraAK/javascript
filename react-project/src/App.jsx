import './App.css'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton.jsx'
import { useState } from 'react'


import { CORE_CONCEPTS, EXAMPLES } from "./data.js"

function App() {
 
  const [examplePanelContent, updateExamlePanelContet] = useState();

  const [currentBtnName, updateCurrentBtnName] = useState();
  
  let examplePanel = <p>Please select concept</p>;

  if (examplePanelContent) {
    examplePanel = <p>{examplePanelContent}</p>;
  }


  function handleClick(buttonName) {
        updateExamlePanelContet(EXAMPLES[buttonName].code);
        updateCurrentBtnName(buttonName);
  }

  return (
    <>   
      <Header/>
      <main>
          <section id="core-concepts">
            <h2>Core concepts</h2>
            <ul>
                {[CORE_CONCEPTS.map(coreConcept => <CoreConcept {...coreConcept}/>)]}
                {/* <CoreConcept 
                  image={CORE_CONCEPTS[0].image} 
                  title={CORE_CONCEPTS[0].title} 
                  description={CORE_CONCEPTS[0].description}/>
                <CoreConcept {...CORE_CONCEPTS[1]}/>
                <CoreConcept {...CORE_CONCEPTS[2]}/>
                <CoreConcept {...CORE_CONCEPTS[3]}/> */}
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton onSelect={() => handleClick('components')} isActive={currentBtnName === 'components'}>{EXAMPLES['components'].title}</TabButton>
                <TabButton onSelect={() => handleClick('jsx')}  isActive={currentBtnName === 'jsx'}>{EXAMPLES['jsx'].title}</TabButton>
                <TabButton onSelect={() => handleClick('props')}  isActive={currentBtnName === 'props'}>{EXAMPLES['props'].title}</TabButton>
                <TabButton onSelect={() => handleClick('state')}  isActive={currentBtnName === 'state'}>{EXAMPLES['state'].title}</TabButton>
            </menu>
            <div id="tab-content">{ examplePanel }</div>
        
            
            {/* cond ? something when cond is trufy : something when cond is false */}
            {/* {examplePanelContent === undefined ? <p>Please select concept</p> : <code>{examplePanelContent}</code>} */}
            {/* { !examplePanelContent &&  <p>Please select concept</p>}
            { examplePanelContent &&  <code>{examplePanelContent}</code>} */}

          </section>

      </main>
    </>
  );
}

export default App;
