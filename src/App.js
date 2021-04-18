import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>World Dictionary 📖</h1>
        <Dictionary defaultKeyword="cake" />
      </div>
      <Footer />
    </div>
  );
}
