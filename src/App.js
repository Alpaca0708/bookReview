import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Card from './components/Card'
import

function App() {  

  return (
    <div style={{display:'flex'}}>
        <div style={{display:'flex',flexDirection:'column', color:'#727272', border:'solid', height:'100%', width:'248px',alignItems:'flex-start'}}>           
            <h2 >
              Ventur
            </h2>            
            <div style={{}}>
                <div className='navStyle' style={{backgroundColor: 'bisque'}}>
                    <p>
                      Dashboard
                    </p>
                    <DownOutlined />
                </div>
                <div className='navStyle'>
                    <p>
                      Notes
                    </p>
                </div>
                <div className='navStyle'>
                    <p>
                      Tasks
                    </p>
                </div>
                <div className='navStyle'>
                    <p>
                      Calendar
                    </p>
                </div>
                <div className='navStyle'>
                    <p>
                      Analytics
                    </p>
                </div>                             
                <hr style={{}}/>
                <p>
                  Setting
                </p>
              </div>
        </div>
        <main style={{width:'100%'}}>
            <div style={{display:'flex', border:'solid', justifyContent:'space-between', padding:'15px'}}>
                <input placeholder='search' style={{}}></input>
                <div style={{display:'flex'}}>
                    <p>
                      Help Center
                    </p>
                    <p>
                      Ellie.L
                    </p>
                </div>  
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h3>
                  Notes
                </h3>
                <div>
                    <button>
                      Sort By
                    </button>
                    <button>
                      Filter
                    </button>
                    <button>
                      Add Notes
                    </button>
                </div>
            </div>
            <div></div>
        </main>

    </div>
  );
}

export default App;
