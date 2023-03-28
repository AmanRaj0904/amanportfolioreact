import "./App.css";
import NavArea from "./components/header";
import Banner from "./components/banner";

function App() {
  return (
    <div>
      <NavArea />
      <div className="row">
        <Banner/>
      </div>
    </div>
  );
}

export default App;
