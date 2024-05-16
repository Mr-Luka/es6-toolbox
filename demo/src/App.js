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

const Greeting = props => (
  <div>
    <h2>Welcome!</h2>
    <p>Hi, {props.name}.</p>
    <p>We are so happy that you have come to crush React</p>
  </div>
);


const GreetGuests = () => {
  const weCanUseVariablesAsPropValues = "Grace";
  return (
    <div>
      <Greeting name="Caroline" />
      <Greeting name="Marie" />
      <Greeting name={weCanUseVariablesAsPropValues} />
    </div>
  );
};

const rootElement = document.querySelector("root");
ReactDOM.render(<GreetGuests />, rootElement);