import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
// import About from './components/About';
import React, {useState} from 'react';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// let home = <b>Home</b>;
function App() {
  const [mode,setMode]=useState('light'); 
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type});
    setTimeout(()=>{setAlert(null)},2000)}

  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='darkblue';
      showAlert('Dark mode has been enabled','success');
      document.title="TextUtils- Dark mode";}
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
      document.title="TextUtils- Light mode";}}

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode} />
      <strong><Alerts alert={alert} /></strong>
      <div className="container">
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
        </Routes> */}
      <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
      </div>
    {/* </Router> */}
    </>

  )
}

export default App;
