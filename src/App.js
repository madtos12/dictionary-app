import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>Dictionary App</h1>
        <Dictionary />
        <Footer />
      </div>
    </div>
  );
}

export default App;
