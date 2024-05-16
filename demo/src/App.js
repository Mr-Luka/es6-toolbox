import logo from './logo.svg';
import './App.css';

function GreetGuests () {
  const weCanUseVariablesAsPropValues = "Grace";
  return (
    <div>
      <Greeting name="Caroline" />
      <Greeting name="Marie" />
      <Greeting name={weCanUseVariablesAsPropValues} />
    </div>
  );
};


export default GreetGuests;

const Greeting = props => (
  <div>
    <h2>Welcome!</h2>
    <p>Hi, {props.name}.</p>
    <p>We are so happy that you have come to crush React</p>
  </div>
);




const rootElement = document.querySelector("root");
ReactDOM.render(<GreetGuests />, rootElement);