import Header from './Header.jsx';
import UserData from './UserData.jsx';
import CoreConcept from './CoreConcept.jsx';
import componentsImg  from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';

function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
      </main>
    </div>
  );
}
export default App;


//1. Create a User object wwith yourdata
//  1. First,Last,Age
//  2. Create a functional component to show this information
//  3. Display this on the screen in a Div at the bottom
//  4. export default App;