import '../App.css'
import { useState, useEffect } from 'react';
import { EditOutlined } from '@ant-design/icons';


function NotesCard (props){
    const [title, setTitle] = useState('')
    const [book, setBook] = useState('')
    const [context, setContext] = useState('')
    const [bookNote, setBookNote] = useState([])

    const titling = (e) => {
        setTitle(e.target.value)
    }    
    const booking = (e) => {
        setBook(e.target.value)
    }
    const note = (e) => {
        setContext(e.target.value)
    }            

    const comfirm = () =>{
        const newNote = {
            title:title,
            book:book,
            context:context
        }        
        setBookNote = () => {Object.keys(newNote)};
        setTitle('')
        setBook('')
        setContext('')       
    }


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
                    <p style={{fontSize:'12px',color:'gray'}}>{props.book_movie}</p>
                    <p>{props.context}</p>
                    

                </div>
                <div style={{padding:'10px', borderTop:'1px solid #AFAFAF', display:'flex',justifyContent:'space-between', alignItems:'center', }}>
                    <button onClick={()=>alert(props.index)} style={{backgroundColor:'black', color:'white',width:'62px', height:'27px', borderRadius:'5px', marginLeft:'10px'}}>
                        <EditOutlined style={{ }}/>Edit
                    </button>
                    <p type='time' style={{marginRight:'10px'}}>
                        
                    </p>
                </div>
            </div>


        {/* <div style={{display:'flex', flexDirection:'column'}}>
            <input type='text' value={title} placeholder='Title' onChange={titling}></input>             
            <input type='text' value={book} placeholder='book/movie' onChange={booking}></input>
            <input type='text' value={context} placeholder='心得' onChange={note}></input>
            <button onClick={comfirm}>確定</button>
        </div> */}

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