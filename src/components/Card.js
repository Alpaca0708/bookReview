import React,{useState,useEffect} from 'react';
import '../App.css'

function Card(props) {

  const [good,setGood] = useState(false)


  return (
    <div style={{display:'flex'}}>
      <h5 className='note-title' style={{color:'#333333'}}>{props.name} ({props.rating})</h5>
      <button onClick={()=>{
        setGood(!good)
        if(good){
          props.aaa(-1)
        }else{
          props.aaa(1)
        }
      }}>{good?'取消讚':'讚'}</button>
      {/* { Array(props.rating).map((r)=>{
        return(
          <span>*</span>
        )
      }) } */}
    </div>
  )
}

export default Card;