import './App.css';
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
      <Navbar mode={mode} title='TextUtils'toggleState={toggleState} textMode={textMode}/>
      <div className="container my-3" >
      <TextForm heading="Enter text below to analyze" mode={mode}/> 
      {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
