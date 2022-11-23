import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";
// import { Home } from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from './components/Contact';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  // document.body.style.backgroundColor="black" ;
  const [switcMode, setSwitcMode] = useState("light");
  const [mode, setMode] = useState("dark");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "dark") {
      showAlert("light mode enmabled", "Dark");

      setMode("light");
      setSwitcMode("dark");
      document.body.style.backgroundColor = "#fff";
    } else {
      setMode("dark");
      setSwitcMode("light");
      showAlert("Dark Mode has Been Enabled", "success");
      document.body.style.backgroundColor = "#012640";
    }
  };
  return (
    <>
      {/* <Nav /> */}

      {/* <Nav mode={mode} toggleMode={toggleMode} switchMode={switcMode} /> */}
      {/* <Alert  alert={alert} />  */}
      {/* <Alert showAlert={showAlert} alert={alert} /> */}

      {/* < About /> */}
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
        
          <Route path="/textform" element={<TextForm showAlert={showAlert} heading="Enter Your Text" />} />
          
          <Route path="/textform" element={<TextForm showAlert={showAlert} heading="Enter Your Text" /> }/>
          
        </Routes>
       
      
      </BrowserRouter>
    </>
  );
}

export default App;
