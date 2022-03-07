import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.children}</h1>
      <p>By: {props.author} {`<${props.email}>`}</p>
    </div>
  );
}

export default App;
