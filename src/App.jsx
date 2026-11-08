//app
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './assets/data.js';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
function App() {
  return (
  <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
  </>  
  );
}
export default App;