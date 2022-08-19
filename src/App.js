import DenseAppBar from "./components/menu";
import { Routes, Route, Link } from "react-router-dom";
import Books from "./components/Books";
import Characters from "./components/Characters";
import Houses from "./components/Houses";

function App() {
  return (
    <>
    <DenseAppBar/>
    <Routes>
    <Route path="/houses" element={<Houses />} />
    <Route path="/characters" element={<Characters />} />
    <Route path="/books" element={<Books />} />
    </Routes>

    </>
  );
}

export default App;
