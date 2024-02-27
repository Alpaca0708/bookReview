import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Card from './components/Card'
import { Alert } from 'antd';
import { DashboardOutlined, CalendarOutlined, BookOutlined, DownOutlined, FileTextOutlined, LineChartOutlined, SettingOutlined, QuestionCircleOutlined,FilterOutlined, PlusOutlined, UnorderedListOutlined  } from '@ant-design/icons';
import user from './user.jpg';


function App() {  

  return (
    <div style={{display:'flex'}}>
        <div style={{ color:'#727272',  width:'248px',}}>           
            {/* Navigate bar */}
            <div style={{padding:'10px',height:'100vh', display:'flex',flexDirection:'column', justifyContent:'space-between', borderRight:'solid 1px #AFAFAF'}}>
                <div>
                  <div style={{color:'black',borderBottom:'solid 1px #AFAFAF'}}>
                    <h2 >
                      Book Notes
                    </h2> 
                    </div>
                  {/* Menu            */}
                    <div style={{}}>
                        <div className='navStyle' >
                            <div style={{display:'flex', alignItems:'center'}}>                
                                  <DashboardOutlined style={{marginRight:'10px'}}/>                        
                                  <p>
                                    Dashboard
                                  </p>
                              </div>                    
                                                        
                        </div>
                        <div  className='navStyle' >
                            <div style={{display:'flex', alignItems:'center'}}>                
                                  <FileTextOutlined  style={{marginRight:'10px'}}/>                        
                                  <p>
                                    Notes
                                  </p>
                              </div>                                                                  
                        </div>
                        <div   style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <div style={{display:'flex', alignItems:'center'}}>                
                                  <BookOutlined style={{marginRight:'10px'}}/>                        
                                  <p>
                                    Tasks
                                  </p>
                              </div> 
                              <DownOutlined />                                                                
                        </div>
                        <div  className='navStyle' >
                            <div style={{display:'flex', alignItems:'center'}}>                
                                  <CalendarOutlined style={{marginRight:'10px'}}/>                        
                                  <p>
                                    Calendar
                                  </p>
                              </div>                                                                  
                        </div>               
                        <div  className='navStyle' >
                            <div style={{display:'flex', alignItems:'center'}}>                
                                  <LineChartOutlined style={{marginRight:'10px'}}/>                        
                                  <p>
                                    Analytics
                                  </p>
                              </div>                                                                  
                        </div> 
                        <hr style={{}}/>  
                    </div>
                </div>
                {/* button */}
                <div>
                    <hr style={{}}/>
                    <div  className='navStyle' >
                        <div style={{display:'flex', alignItems:'center'}}>                
                              <SettingOutlined style={{marginRight:'10px'}}/>                        
                              <p>
                                  Setting
                              </p>
                          </div>                                                                  
                    </div>
                </div>                 
            </div>
        </div>
        <main style={{width:'100%'}}>
            <div style={{display:'flex', borderBottom:'solid 1px #AFAFAF', justifyContent:'space-between', padding:'15px'}}>
                <input placeholder='search' style={{height:'41px', width:'360px',border: '1px solid #AFAFAF', borderRadius:'5px'}}></input>
                <div style={{display:'flex', alignItems:'center'}}>
                    <QuestionCircleOutlined style={{marginRight:'16px'}}/>
                    <p style={{marginRight:'16px'}}>
                      Help Center
                    </p>
                    <div style={{width:'32px', height:'32px', borderRadius:'50%', overflow:'hidden',position: 'relative', marginRight:'16px', marginLeft:'16px'}}>
                    <img src ={user} alt= "user" style={{
                                                                width:'100%',
                                                                height:'100%',
                                                                objectFit: 'contain',                                                                
                                                                position:'absolute',
                                                                transform: 'scale(1.3)',                                                
                                                                top: '4px',
                                                                }}></img>
                    </div>
                    <p style={{marginRight:'10px', fontWeight:'bold'}}>
                      Ellie.L
                    </p>
                    <DownOutlined/>

                </div>  
            </div>
            <div style={{display:'flex', justifyContent:'space-between', borderBottom: '1px solid #AFAFAF', alignItems:'center'}}>
                <h3 style={{marginLeft:'16px'}}>
                    Notes
                </h3>
                <div style={{display:'flex',}}>
                    <button style={{height:'37px', borderRadius:'5px', backgroundColor:'white',padding:'10px',marginRight:'16px', fontWeight:'bold'}}>
                    <UnorderedListOutlined style={{marginRight:'10px'}} />Sort By
                    </button>
                    
                    <button style={{height:'37px', borderRadius:'5px', backgroundColor:'white',padding:'10px',marginRight:'16px', fontWeight:'bold'}}>
                        <FilterOutlined style={{marginRight:'10px'}}/>
                        Filter      
                    </button>
                    <hr/>
                    <button style={{color:'white', backgroundColor:'black', padding:'10px', height:'37px',marginLeft:'16px',marginRight:'16px', borderRadius:'5px'}}>
                    <PlusOutlined /> Add Notes
                    </button>
                </div>
            </div>
            <div style={{border:'1px solid black', width:'100px', height:'60px', padding:'10px'}}>
                <div>AAA</div>

            </div>
        </main>

    </div>
  );
}

export default App;
