import {useState,useEffect,useRef} from 'react';
import '../App.css'
import {Editor, EditorState} from 'draft-js';

function Card(props) {

  const [good,setGood] = useState(false)
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // 添加編輯器狀態
  const [showEditor,setShoweditor] = useState('none')
  const [tempText,setTempText] = useState(props.note)

  const editor = useRef(null);
 
  function focusEditor() {
    editor.current.focus();
  }
 
  useEffect(() => {
    focusEditor()
  }, []);

  // const handleEditorChange = (state) => {
  //   console.log('state:::',state)
  //   setEditorState(state);
  // };
  useEffect(()=>{
    console.log('editorState:::',editorState.getCurrentContent().getPlainText())
    setTempText(editorState.getCurrentContent().getPlainText())
  },[editorState])


  return (
    <div style={{display:'inline' }}>
      <div className='note-title' style={{display:'inline', justifyContent:'space-between' }}>
          {props.name}          
          ({props.rating})
          <button onClick={()=>{
                setGood(!good)
                if(good){
                  props.aaa(-1)
                }else{
                  props.aaa(1)
                }
              }}>{good?'取消讚':'讚'}
          </button>
          <button onClick={()=>setShoweditor('flex')}>Edit</button>
          <div style={{display:showEditor}} onClick={focusEditor}>
            {/* {tempText} */}

            <Editor
              ref={editor}
              editorState={editorState}
              onChange={editorState => setEditorState(editorState)}
            />
          </div>
      </div>
      {/* { Array(props.rating).map((r)=>{
        return(
          <span>*</span>
        )
      }) } */}
       {/* <Editor editorState={。} onChange={handleEditorChange} /> */}
    </div>
  )
}

export default Card;