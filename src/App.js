import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Card from './components/Card'

function App() {
  const NoteCard = ({ title, timestamp }) => (
    <div className="note-card">
      <div className="note-title">{title}</div>
      <div className="note-timestamp">{timestamp}</div>
    </div>
  );
  
  const NotesList = ({ notes }) => (
    <div>
      {notes.map(note => (
        <NoteCard key={note.id} title={note.title} timestamp={note.timestamp} />
      ))}
    </div>
  );

  const [bookName, setBookName] = useState([])
  const [newBookname, setNewbookname] = useState('')
  const addBook = () => {
    if (newBookname) {
      setBookName([...bookName, newBookname]);
      setNewbookname('');
    }
  };

  const [count, setCount] = useState(0)

  const aaa = (number) =>{
    setCount(count+number)
  }
  

  return (
    <div>
        <header className="app-header">
          <h1>Book Notes APP</h1>
        </header>
        <main style ={{backgroundColor:'#F5F5F5', display:'flex', flexDirection:'column', alignItems:'center', padding:'5px' }}>
            <div className='note-card'>
              <h2>My Book List ({count})</h2>                  
                  <ol style={{padding:'-5px'}}>
                    {bookName.map((name, index) => (
                        <li className='note-title' key={index}>
                          <Card name={name} rating={5} aaa={aaa}/>
                        </li>
                      ))}
                  </ol>           
            </div>
        </main>
        <div style={{display:'flex', justifyContent:'center'}}>
            <input type="text" value={newBookname} 
                   onChange={e => setNewbookname(e.target.value)}
                   placeholder='輸入書名後點擊 + 來新增'
                   style={{padding:'5px'}} />
            <button style={{
                width:'30px', 
                height:'30px', 
                borderRadius:'50%', 
                border:'none', 
                backgroundColor: '#ADD8E6', 
                color:'white', 
                cursor: 'pointer'}} 
                onClick={addBook}>+</button>
        </div>
      


    </div>
  );
}

export default App;


 {/* {notes.length > 0 ? (
            <ul className="notes-list">
              {notes.map(note => (
                <li key={note.id}>{note.title}</li>
              ))}
            </ul>
          ) : (
            <p className="placeholder-text">目前沒有筆記，點擊下方的 '+' 按鈕來新增你的第一條讀書筆記！</p>
          )} */}