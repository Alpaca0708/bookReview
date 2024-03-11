import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
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
      title:'One Breath Away',
      book_movie:'One Breath Away',
      context: 'In this journey of discovery, Green uses emotional appeal to absorb readers into the bittersweet lives of Hazel and Gus. Mentioning Hazel’s birthday celebration, the author indicates the importance of treasuring the moment: “Hazel! It’s your thirty-third half birthday!”, her mother exclaims happily, establishing an irony when considering the tragic reason for such a merry celebration (39). In desperation, not knowing when her last day would arrive, Hazel’s family could only cherish their moments together. Nonetheless, Hazel also starts to worry about her family: “I worry… that you’ll sit around here all day with no me… and want to off yourselves (297). When facing the ones dying, we fret over them, about their circumstances, their emotional wellbeing, and their health. However, those with the illnesses usually worry about our reactions regarding their conditions even more than their own wellbeing. For Gus, Green incorporates how Gus sees himself as the “pitiful boy who desperately wanted not to be pitiful... poisoned by an infected G-tube that kept him alive, but not alive enough”, depicting his concerns around his physical limitations, a side concealed by his humor (245). Creating multiple dimensions to his characters, Green portrays the lives of two young teenagers beyond their illnesses, exploring life with their daily hardships.'
    },
    {
      title:'Answers',
      book_movie:'Answers',
      context: 'Hazel and Augustus do not allow their illness to become their defining characteristics. Although they start on different paths, both paths eventually merge and become one in which they walk side by side. As Augustus writes, You dont get to choose if... I like my choices,” there are no more regrets between them. Although lives are lost and tears are shed, there is no doubt that they discover the answers that they have been looking for.'
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

  const handleAddnote = () => {
    const newNote = {
      title:title,
      book_movie:book_movie,
      context:context
    } 
      if(popUpIndex == -1){
          setCardInformation([...cardInformation, newNote]) 
                                                 // newNote為新增物件到array裡, 想當於JS的.push
          setTitle('')
          setBook_movie('')
          setContext('')
          setPop(!pop)
      } 
      else if (popUpIndex > -1) {
        let newCardInformation = [...cardInformation]
        newCardInformation[popUpIndex] = newNote
          setCardInformation(newCardInformation) 
          setTitle('')
          setBook_movie('')
          setContext('')
          setPop(!pop)
      }     
    }
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
      const newData = cardInformation.filter((x) => x.title.includes(search));
      setFilterData(newData);
    }, [search]);
    
    // const deleteCard = cardInformation.splice(0,1)

    // start:陣列索引值
    // deleteCount:刪除陣列裡的物件數量
    // var removed = myFish.splice(3, 1);
    
    // const searchItem = (searchValue) => {
    //   setSearch(searchValue)
    //   const filteredData = cardInformation.filter((item) => {
    //     return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
    //     })
    // }

    // const filterData = cardInformation.filter((x) => x.title.includes(search))
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
  }

//   const [people, setPeople] = useState(data);

// const handleRemove = (id) => {
//    const newPeople = people.filter((person) => person.id !== id);

//    setPeople( newPeople);
//  };

// <button onClick={() => handleRemove(id)}>Remove</button>
 

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
                <input placeholder='  search' onChange={(e) =>setSearch(e.target.value)} value={search} style={{height:'41px', width:'360px',border: '1px solid #E4E4E4', borderRadius:'5px', }}></input>
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
                <div style={{position:'fixed', top:'80px', right:'170px', backgroundColor:'white',  display:'flex', flexDirection:'column', width:'60%', border:'1px solid #AFAFAF', borderRadius:'9px', padding:'30px'}}>
                    {/* <div > */}
                        <h3 >Book/Movie notes</h3>
                        <hr/>    
                    {/* </div>                   */}
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <input placeholder='title' value={title} type='text' onChange={changeTitle} style={{ marginBottom:'10px', border:'1px solid #E4E4E4', borderRadius:'7px', height:'25px'}}  ></input>
                        <input placeholder='book or movie' value={book_movie} type='text' onChange={changeBook_movie} style={{marginBottom:'10px', border:'1px solid #E4E4E4', borderRadius:'7px', height:'25px'}}></input>
                        <textarea rows='20' value={context} onChange={changeContext} style={{padding:'10px', border:'1px solid #E4E4E4', borderRadius:'5px', marginBottom:'10px'}}></textarea>                       
                    </div>       
                    {popUpIndex==-1?           
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
                    <button onClick={addNote} style={{border:'1px solid black', backgroundColor:'red', height:'30px', color:'white', borderRadius:'5px', border:'none'}}>
                      Cancel
                      </button>
                </div>)}


        </main>

    </div>
  );
}

export default App;
