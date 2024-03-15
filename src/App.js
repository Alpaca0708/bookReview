import './App.css';
import {useState, useEffect} from 'react';
import { DashboardOutlined, CalendarOutlined, BookOutlined, DownOutlined, FileTextOutlined, LineChartOutlined, SettingOutlined, QuestionCircleOutlined,FilterOutlined, PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import user from './user.jpg';
import NotesCard from './components/NotesCard';



function App() {  

  const [pop, setPop] = useState(false)
  const [popUpIndex, setPopupIndex] = useState(-1)
  const addNote = () => {
      setTitle('')
      setBook_movie('')
      setContext('')
      setPop(!pop)      
      }

  const [title, setTitle] = useState('')
  const [book_movie, setBook_movie]= useState('')
  const [context, setContext] = useState('')
  const [cardInformation,setCardInformation] = useState([
    {
      title:'善用賽局理論,人生不出局',
      book_movie:'賽局理論',
      context: '賽局理論告訴我們，要將問題先想成一個賽局，並且分析兩人以上的玩家，他會如何決策和行動？並且找出一個能讓玩家獲得雙贏的結果，這邊要注意的是，賽局理論注重「雙贏」而非「擊敗對手」。或許有人會認為，比賽不是就是要打敗對手嗎？但是俗話說：「傷敵一千，自損八百」，你贏對方的同時，自己勢必也會有某種程度上的損失，你並沒有因為贏了對手而獲得最大利益。孫子說過：「故善用兵者，屈人之兵而非戰也，拔人之城而非攻也，毀人之國而非久也，必以全爭於天下，故兵不頓而利可全，此謀攻之法也」孫大爺都這麼說了，我們還要為了贏過對手而爭得死去活來嗎？賽局理論得定義是：「分析複數以上主體，彼此利害關係的方法」，而我們學習賽局理論，有三個目的：1.釐清賽局(問題)的整體架構 → 提升分析問題的能力2.預測未來可能發生的事 → 提升預測能力3.選擇最合適的結果 → 提升問題解決的能力'
    },
    {
      title:'用30分鐘讀完一本書',
      book_movie:'雪球速讀法',
      context: '所謂的「高速大量循環」，背後的精神是「讀得快，更容易理解內容」和「第二次讀的時候，會比第一次讀得更快」。作者以許多案例說明，讀得慢，不如讀得快、讀得多次，反覆且快速的來回閱讀，被證明是更能掌握整本書精華的方法。'
    },
    {
      title:'Behind a Perfect World',
      book_movie:'Behind a Perfect World',
      context: 'The Giver is a brilliantly crafted book, dealing with a rather rare topic with the setting of a perfect utopian society;'
    }
  ])

  // useEffect(()=>{
  //   let newData = {
  //     title:'哈利波特教我的五件事4',
  //     book_movie:'哈利波特4',
  //     context: 'abcjoisajdoiasjdo sajiodajsido asjodiasjoid sajid  oajsid'
  //   }
  //   setCardInformation([...cardInformation, newData])
  // //   // let tempCardInforation = [...cardInformation]
  // //   // tempCardInforation.push(newData)
  // //   // setCardInformation(tempCardInforation)

  // },[])
  // useEffect(()=>{
  //   let ddd = localStorage.getItem('myData')
  //   console.log(ddd)
  //   setCardInformation(JSON.parse(ddd))
  // },[])

  const handleAddnote = () => {
    const newNote = {
      title:title,
      book_movie:book_movie,
      context:context
    } 
      if(popUpIndex == -1){
          setCardInformation([...cardInformation, newNote])           
                                                 // newNote為新增物件到array裡, 相當於JS的.push
          setTitle('')
          setBook_movie('')
          setContext('')
          localStorage.setItem('myData', JSON.stringify([...cardInformation, newNote]));
          setPop(!pop)
          console.log(popUpIndex)
      }   else if (popUpIndex > -1) {
        let newCardInformation = [...cardInformation]
        newCardInformation[popUpIndex] = newNote
        setCardInformation(newCardInformation) 
        setTitle('')
        setBook_movie('')
        setContext('')
        localStorage.setItem('myData', JSON.stringify(newCardInformation));
        setPop(!pop)
        console.log(popUpIndex)
        setPopupIndex(-1)
      }     
    }

    // const handleAddnote = () => {
    //   const newNote = {
    //     title: title,
    //     book_movie: book_movie,
    //     context: context
    //   };
  
    //   let updatedCardInformation;
    //   if (popUpIndex === -1) {
    //     updatedCardInformation = [...cardInformation, newNote];
    //   } else {
    //     updatedCardInformation = [...cardInformation];
    //     updatedCardInformation[popUpIndex] = newNote;
    //   }
  
    //   // 更新狀態並將資料儲存到 localStorage
    //   setCardInformation(updatedCardInformation);
    //   localStorage.setItem('myData', JSON.stringify(updatedCardInformation));
  
    //   // 清空表單和彈出視窗
    //   setTitle('');
    //   setBook_movie('');
    //   setContext('');
    //   setPop(!pop);
    // };
  
    
    
    
    // const searchItem = (searchValue) => {
    //   setSearch(searchValue)
    //   const filteredData = cardInformation.filter((item) => {
    //     return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
    //     })
    // }

    // const filterData = cardInformation.filter((x) => x.includes(search))
    // console.log(filterData)    
    
    //  setCardInformation([cardInformation.filter((x) => x.title.includes(search))]) 

    // console.log(search)

  
  const changeTitle =(e) =>{
    setTitle(e.target.value)   
  }
  const changeBook_movie =(e) =>{
    setBook_movie(e.target.value)   
  }
  const changeContext =(e) =>{
    setContext(e.target.value)   
  }

  const popUpAction = (title,book_movie,context,cardIndex) => {
    setPop(true)
    setTitle(title)
    setBook_movie(book_movie)
    setContext(context)
    setPopupIndex(cardIndex)
  }

  const handleRemove = (i) => {
    const newCard = cardInformation.filter ((card, index) => index !== i);
    setCardInformation (newCard)
    console.log(cardInformation)
    localStorage.setItem('myData', JSON.stringify(newCard));
  }
  const [search, setSearch] = useState('')
  const [filterData, setFilterData] = useState(cardInformation);

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearch(searchTerm)
    const filteredItems = cardInformation.filter((info) =>
    info.context.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterData(filteredItems);
  }
 

  return (
    <div style={{display:'flex'}}>
        <div style={{ color:'#727272',  width:'296px',}}>           
            {/* Navigate bar */}
            <div style={{padding:'10px',height:'100vh', display:'flex',flexDirection:'column', justifyContent:'space-between', borderRight:'solid 1px #E4E4E4', backgroundColor:'#F9F9F9'}}>
                <div>
                  <div style={{color:'black',borderBottom:'solid 1px #E4E4E4'}}>
                    <h2 >
                      Book Notes
                    </h2> 
                    </div>
                  {/* Menu            */}
                    <div style={{borderBottom:'solid 1px #E4E4E4'}}>
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
                    </div>
                </div>
                {/* bottom */}
                <div style={{borderTop:'solid 1px #E4E4E4'}}>
                    {/* <hr style={{color:'#E4E4E4'}}/> */}
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
            <div style={{display:'flex', borderBottom:'solid 1px #E4E4E4', justifyContent:'space-between', padding:'10px'}}>
                <input placeholder='  search' onChange={handleInputChange} value={search} style={{height:'41px', width:'360px',border: '1px solid #E4E4E4', borderRadius:'5px', }}></input>
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
                    <DownOutlined style={{marginRight:'10px'}}/>
                </div>  
            </div>
            <div style={{display:'flex', justifyContent:'space-between', borderBottom: '1px solid #E4E4E4', alignItems:'center'}}>
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
                    <button onClick={addNote}style={{color:'white', backgroundColor:'black', padding:'10px', height:'37px',marginLeft:'16px',marginRight:'16px', borderRadius:'5px'}}>
                        <PlusOutlined /> Add Notes
                    </button>
                </div>
            </div>
            <div style={{padding:'20px'}}>
                <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                  {cardInformation.map((cardIn,index)=>{
                    return(<NotesCard index={index} title={cardIn.title} book_movie={cardIn.book_movie} context={cardIn.context} popUpAction={popUpAction} handleRemove={handleRemove}/>)
                  })}
                                
                  
                  {/* {filterData.map((cardIn, index) => (
                    return(<NotesCard key={index} index={index} title={cardIn.title} book_movie={cardIn.book_movie} context={cardIn.context} popUpAction={popUpAction} />)
                  ))} */}
                </div>
            </div>
            {pop && (
                <div style={{position:'fixed', top:'60px', right:'170px', backgroundColor:'white',  display:'flex', flexDirection:'column', width:'60%', border:'1px solid #AFAFAF', borderRadius:'9px', padding:'30px'}}>
                    {/* <div > */}
                        <h3 >Book/Movie notes</h3>
                        <hr/>    
                    {/* </div>                   */}
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <input placeholder='title' value={title} type='text' onChange={changeTitle} style={{ marginBottom:'10px', border:'1px solid #E4E4E4', borderRadius:'7px', height:'25px'}}  ></input>
                        <input placeholder='book or movie' value={book_movie} type='text' onChange={changeBook_movie} style={{marginBottom:'10px', border:'1px solid #E4E4E4', borderRadius:'7px', height:'25px'}}></input>
                        <textarea rows='20' value={context} onChange={changeContext} style={{padding:'10px', border:'1px solid #E4E4E4', borderRadius:'5px', marginBottom:'10px'}}></textarea>                       
                    </div>  
                         
                    {popUpIndex ==-1?           
                      <button style={{border:'1px solid black', backgroundColor:'white', height:'30px', marginBottom:'10px', borderRadius:'5px'}}
                              onClick={handleAddnote}>
                          <PlusOutlined style={{marginRight:'10px'}}/>Add Note
                      </button>
                      :
                      <button style={{border:'1px solid black', backgroundColor:'white', height:'30px', marginBottom:'10px', borderRadius:'5px'}}
                            onClick={handleAddnote}>
                        <PlusOutlined style={{marginRight:'10px'}}/>Update
                      </button>
                    }
                    <button onClick={addNote} style={{backgroundColor:'red', height:'30px', color:'white', borderRadius:'5px', border:'none'}}>
                      Cancel
                      </button>
                </div>)}


        </main>

    </div>
  );
}

export default App;


// local storage
// search function
// task page
