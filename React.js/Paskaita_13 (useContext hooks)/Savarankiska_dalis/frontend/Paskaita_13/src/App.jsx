import DarkAndLightModes from "./Context/DarkAndLightModes";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './App.css'

function App() {
  return (
    <div>
      <DarkAndLightModes>
        <Header />
        <Body />
        <Footer />
      </DarkAndLightModes>
    </div>
  );
}

export default App;
