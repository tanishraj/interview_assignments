import { BoxMergeInteraction } from "./components/BoxMergeInteraction";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Box Merge Interaction</h1>
        <p>
          The box you will click, the other 2 boxes will merge together and form
          one single big box and same thing will happen to all the boxes on the
          click.
        </p>
        <BoxMergeInteraction />
      </div>
    </div>
  );
}

export default App;
