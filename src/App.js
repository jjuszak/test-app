import './App.css';
import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  return (
    <div className="App">
      <TestComponent
          dataOne={"Some stuff"}
          someOtherProp={"Some other stuff"}
          theBestProp={"Some really riveting stuff"}
      />
    </div>
  );
}

export default App;
