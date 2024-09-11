import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app h-full w-full">
      <Header />
      <Hero />
      <Story />
      <Dishes />
      <Footer />
    </div>
  );
}

export default App;
