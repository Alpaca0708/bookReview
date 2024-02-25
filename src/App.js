import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Card from './components/Card'

function App() {  

  return (
    <div style={{display:'flex'}}>
        <nav style={{display:'flex',flexDirection:'column', color:'#727272'}}>
            <h1>
              Ventur
            </h1>
            <hr style={{borderColor:'#727272'}}/>
            <p>
              Dashboard
            </p>
            <p>
              Notes
            </p>
            <p>
              Tasks
            </p>
            <p>
              Calendar
            </p>
            <p>
              Database
            </p>
            <p>
              Analytics
            </p>
            <hr/>
            <p>
              Setting
            </p>
        </nav>
        <main>
            <div style={{display:'flex', }}>
                <input placeholder='search'></input>
                <p>Help Center</p>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h3>
                  Notes
                </h3>
                <p>
                  Sort By
                </p>
                <p>
                  Filter
                </p>
                <p>
                  Add Notes
                </p>
            </div>
            <div></div>
        </main>

    </div>
  );
}

export default App;
