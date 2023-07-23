import { Routes, Route,BrowserRouter, } from "react-router-dom";
import Home from './Pages/Home/Home';
import AnimatedCursor from "react-animated-cursor";
import 'antd/dist/antd.min.css'


function App() {
  
  return (
    <div class="app">
      <AnimatedCursor
          innerSize={8}
          outerSize={32}
          color="255, 95, 61"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          // trailingSpeed={5}
        />
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>} />
          
        </Routes>

      </BrowserRouter>
      </div>
  );
}

export default App;