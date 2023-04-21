import './App.css';
import { Route, Routes} from 'react-router-dom';
import Nav from "./components/Nav";
import Web from "./components/Web";
import News from "./components/News";
import Img from "./components/Img";

function App() {
  return (
    <div>
      <Nav />
      <h1 className="badge bg-primary text-wrap" style={{width: "10rem"}}>Welcome to EVE</h1>
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
