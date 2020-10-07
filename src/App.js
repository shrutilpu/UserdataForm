import React,{useEffect} from 'react';
import './App.css';
import Form from './Form';


function App() {
  
  useEffect(() => {
    localStorage.setItem("role","admin");
  })
  return (
    <div className="App">
     <Form/> 

    </div>
  );
}

export default App;
