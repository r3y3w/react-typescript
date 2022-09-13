import React from 'react';
import './App.css';
import {useState} from 'react'
import Hello  from './components/Hello';
import Form from './components/Form';


function App() {

  const firstName = "bobby"
  const lastName = "smithy"

  const [form, setForm] = useState({})

  interface FormInterface {
    firstName:string
    lastName:string
  }

  return (
    <div className="App">
      <header className="App-header">
        < Hello firstName={firstName} lastName={lastName} />
        < Form />
      </header>
    </div>
  );
}

export default App;
