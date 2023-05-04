import './App.css';
import { Route, Routes} from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Web from "./components/Web";
import News from "./components/News";
import Img from "./components/Img";

function App() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/web" element={<Web />} />
        <Route path="/news" element={<News />} />
        <Route path="/images" element={<Img />} />
      </Routes>
    </div>
  );
}
export default App;
