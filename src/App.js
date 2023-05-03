import './App.css';
import { Route, Routes} from 'react-router-dom';
import Nav from "./components/Nav";
import Web from "./components/Web";
import News from "./components/News";
import Img from "./components/Img";

function App() {
  return (
    <div class="main">
      <Nav />
      <h1 className="text-center fw-bold display-2" style={{width: "30rem", color: "#EAEFD3", letterSpacing: "6px"}}>Welcome to EVE</h1>
      <Routes>
        <Route path="/*" element={<Web />} />
        <Route path="/web" element={<Web />} />
        <Route path="/news" element={<News />} />
        <Route path="/images" element={<Img />} />
      </Routes>
    </div>
  );
}
export default App;
