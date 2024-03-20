import '../App.css'
import { useState, useEffect } from 'react';
import { CalendarOutlined, PlusOutlined, ProductOutlined } from '@ant-design/icons';


function Tasks (props){
    return(
        <div style={{border:'1px solid gray', padding:'15px', borderRadius:'7px'}}>
            <h3>
                Planned
            </h3>
            <button style={{width:'100%', marginBottom:'10px'}}>
                <PlusOutlined style={{marginRight:'5px'}}/>
                Create Task
            </button>
            <div style={{border:'1px solid gray', padding:'10px', borderRadius:'5px'}}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <h4>
                        Monthly Product Discussion
                    </h4>
                    <div style={{color:'gray'}}>
                        <CalendarOutlined style={{marginRight:'5px'}}/> Due Date 24 Jan 2024
                    </div>
                    <div>
                        <ProductOutlined style={{marginRight:'5px'}}/> 5/10
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tasks;