import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import About from './components/About';
import Alert from './components/Alert';


function App() {
  const [mode , setMode] =useState('light');
  const [alert,setAlert] =useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   };

  const toggalMode = ()=>{
     if(mode === 'light'){
         setMode('dark');
         document.body.style.backgroundColor="#020f1e";
         showAlert("Dark mode has been enable", "success")
     }

     else{
      setMode('light');
      document.body.style.backgroundColor='#dfdfdf';
      showAlert("Light mode has been enable", "success")
     }   
  };
  return (
    <>
  <Router>
    <Navbar title="TextUtils" aboutText="AboutTextUtils" mode ={mode} toggalMode={toggalMode}/>
    <Alert alert={alert}/>
    <Routes>
         <Route exact path="/" element={<TextBox showAlert = {showAlert} heading="Enter the text to analyze below" mode ={mode}/>}/>
         <Route exact path="/about" element={<About showAlert = {showAlert} mode ={mode}/>}/>
    </Routes>
  </Router>
    </>
  );
}   

export default App;