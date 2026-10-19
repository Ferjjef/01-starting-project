const reactDescriptions=['Fundamental', 'Crucial', 'Core'];
import reactImg from './assets/react-core-concepts.png';

function Header(){
  const description=reactDescriptions[getRandomInt(2)];
  return(
    <header>
    <main>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you  will need for almost any app you are going to build!
        </p>
    </main>
    </header>
  )
}
export default Header;