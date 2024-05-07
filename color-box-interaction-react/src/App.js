import { ColorBoxInteraction } from "./components/ColorBoxInteraction";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Color Box Interaction</h1>
        <p>
          THe box you will click, will remain the same color and other 2 boxes
          will change it's color.
        </p>
        <ColorBoxInteraction />
      </div>
    </div>
  );
}

export default App;
