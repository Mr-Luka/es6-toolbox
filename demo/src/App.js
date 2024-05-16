import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const GroceryList = () => (
    <ul>
        <li>Broccoli</li>
        <li>Carrots</li>
        <li>Apples</li>
        <li>Oranges</li>
        <li>Kale</li>
    </ul>
);

const rootElement = dociment.querySelector("#root");
ReactDOM.render(<GroceryList />, rootElement);