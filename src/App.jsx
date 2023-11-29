
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Mainpage from './Components/Mainpage';
import Search from './Components/Search';


function App() {
  

  const [darkMode, setDarkMode] = useState(false)
  

  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }


  return (
    <div className={`App ${darkMode ? 'dark-Mode' : ""}`}>
      <Header darkMode={darkMode} changeDarkMode={changeDarkMode}/>
      <Search darkMode={darkMode} changeDarkMode={changeDarkMode}/>
      <Mainpage darkMode={darkMode} changeDarkMode={changeDarkMode}/>

    </div>
  );
}

export default App;
