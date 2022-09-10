import { Routes, Route,BrowserRouter, } from "react-router-dom";
import Home from './Pages/Home/Home';
import AnimatedCursor from "react-animated-cursor";
import 'antd/dist/antd.css';

function App() {
  
  return (
    <>
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <BrowserRouter>

        <Routes>
          <Route path="/home" element={<Home/>} />
          
        </Routes>

      </BrowserRouter>
      </>
  );
}

export default App;