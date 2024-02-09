import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
function App() {
  const [mode, setMode] = useState('light')
  const [textMode, setTextMode] = useState('Dark Mode')
  const toggleState = ()=>{
    if (mode==='light') {
      setMode('dark')
      setTextMode('Light Mode');
      document.body.style.backgroundColor= "#121212"
    } else {
      setMode('light')
      setTextMode('Dark Mode');
      document.body.style.backgroundColor= "white"
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar mode={mode} title='TextUtils'toggleState={toggleState} textMode={textMode}/>
      <Routes>
        <Route exact path="/" element={ <TextForm heading="Enter text below to analyze" mode={mode}/> }/>
          <Route exact path="home" element={ <TextForm heading="Enter text below to analyze" mode={mode}/> } />
          <Route exact path="about" element={<About toggleState={toggleState} mode={mode}/>} />
        
      </Routes>
    </BrowserRouter>   
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
export default App;
