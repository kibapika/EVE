import './App.css';
import { Route, Routes} from 'react-router-dom';
import Nav from "./components/Nav";
import Web from "./components/Web";
import News from "./components/News";
import Img from "./components/Img";

function App() {
  return (
    <div class="main d-flex flex-column justify-content-center align-items-center">
      <Nav />
      <h1 className="text-center" style={{width: "20rem", color: "#DEDBD2"}}>Welcome to EVE</h1>
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
