import '../App.css'
import { useState, useEffect } from 'react';
import { EditOutlined } from '@ant-design/icons';



function NotesCard (props){
   


    return(
        <div>
            <div style={{width:'360px',minHeight:'230px',minWidth:'360px',marginBottom:'30px', border:'1px solid #AFAFAF', borderRadius:'10px', display:'flex',flexDirection:'column', justifyContent:'space-between'  }}>
                <div style={{padding:'15px', lineHeight:'15px', overflowWrap:'break-word' }}>
                    <div style={{display:'flex',  }}>
                        <p style={{color:'#B1AB1D', borderRadius:'5px', margin:'5px', backgroundColor:'#F7F7E8', padding:'5px'}}>Personal</p>
                        <p style={{color:'#4976F4', borderRadius:'5px', margin:'5px', backgroundColor:'#EDF2FE', padding:'5px'}}>Insights</p>
                        
                    </div>
                    {/* {bookNote.map((note, index) => (
                    <div key={index}>
                        <h3>{note.title}</h3>
                        <p>{note.book}</p>
                        <p>{note.context}</p>
                    </div>
                    ))} */}
                    
                    <h3>{props.title}</h3>
                    <p>{props.book_movie}</p>
                    <p style={{fontSize:'14px',color:'gray', textOverflow: 'ellipsis', overflow: 'hidden', WebkitLineClamp:1,  whiteSpace: 'nowrap'}}>
                        {props.context}
                    </p>
                    

                </div>
                <div style={{padding:'10px', borderTop:'1px solid #AFAFAF', display:'flex',justifyContent:'space-between', alignItems:'center', }}>
                    <button 
                    // onClick={()=>alert( props.title)} 
                    //父傳子一個function,再用這個function 讓子傳父:改變父親的值
                    //popUpAction()內為4個參數
                    onClick={()=>props.popUpAction(props.title,props.book_movie,props.context,props.index)}
                    
                    style={{backgroundColor:'black', color:'white',width:'62px', height:'27px', borderRadius:'5px', marginLeft:'10px'}}>
                        <EditOutlined />Edit
                    </button>
                    <button style={{backgroundColor:'red', color:'white',width:'62px', height:'27px', borderRadius:'5px', marginLeft:'10px', border:'none'}}
                    // onClick={() =>props.handleRemove(props.index) }>
                    onClick={() => props.handleRemove( props.index)}>
                            
                        Delete
                    </button>
                    
                        
                    
                </div>
            </div>

    </div>
    )
}

export default NotesCard;

{/* 心得標籤
Personal
Insights
Goals
Career
Reflections
Creative */}