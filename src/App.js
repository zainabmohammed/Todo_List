import { Routes, Route } from "react-router-dom";
import { useStore } from "./Store";
import HomeScreen from "./screens/homeScreen";
import AboutScreen from "./screens/aboutScreen";
import MainHeader from "./component/Global/MainHeader";
import "./App.css";

function App() {
  const { lang } = useStore();

  return (
    <div className={`App ${lang === "ar" ? "ar-container" : ""}`}>
      <MainHeader />
      <Routes>
        <Route excat path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </div>
  );
}

export default App;
