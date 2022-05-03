import "./App.scss";
import Listing from "./Listing";
import items from "./data/items.json";

function App() {
  return <Listing items={items} />;
}

export default App;
