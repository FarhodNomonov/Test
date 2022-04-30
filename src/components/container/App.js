import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./../home/index";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
