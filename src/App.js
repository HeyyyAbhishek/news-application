// import { BrowserRouter, Route, Routes, Switch } from "react-router";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
