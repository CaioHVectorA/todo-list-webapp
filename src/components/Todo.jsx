import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import {FaTrash} from 'react-icons/fa'
import {useRef, useState, useContext, useEffect} from 'react'
import UserContext from './UserContext'

function Todo({Item, index}) {
  const {todoData, Ref,setTodos, setRef} = useContext(UserContext)
  const inputtextref = useRef()
  const [inputText,setInputText] = useState('')
  useEffect(() => {
    setInputText(todoData[Ref.Ref].Todos[index].Nome)
    console.log('teste')
  }, [Ref.Ref, index, todoData])
    const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  
    const handleInputBlur = () => {
    const data = [...todoData];
    const item = data[Ref.Ref].Todos[index];
    item.Nome = inputText;
    setTodos(data);
  };
  // cara esta porra desse input ta bugado. Tentei com stated input essa porra nao foi, agora com use Ref também nao vai...
  return (
                 <div style={{display: 'flex',justifyContent: 'space-between',padding: '12px 16px',border: '1px solid rgba(0,0,0,.1)',backgroundColor: 'white',borderRadius: '8px'}} key={Item.Nome+Item.color+index.toString()}>
               <div style={{display: 'flex',gap: '12px',alignItems: 'center'}}>
                 <input  type={'checkbox'} checked={Item.Feito} onChange={() => {
                     const state = [...todoData]
                     const item = state[Ref.Ref]
                     console.log(item.Todos[index].Feito)
                     item.Todos[index].Feito = !item.Todos[index].Feito
                     setTodos(state)
                 }}/>
               {/* <div style={{height: '40px',aspectRatio: '1',border: '1px solid black'}}> </div> */}
               <input style={{width: '500px'}} value={inputText} onChange={(e) => handleInputChange(e)} onBlur={handleInputBlur}/>
                 
               </div>
               <div style={{fontSize: '19.6px',cursor: 'pointer',display: 'flex',alignItems: 'center',gap: '8px'}}>
                 <div style={{fontSize: '19.6px',cursor: 'pointer',display: 'flex',flexDirection: 'column'}}>
                   <BiChevronUp />
                   <BiChevronDown />
                 </div>
               <FaTrash style={{color: 'rgb(211,95,95)',cursor: 'pointer',fontSize: '28px'}} onClick={() => {
                 const dataTodo = [...todoData]
                 const item = dataTodo[Ref.Ref]
                 item.Todos.splice(index,1)
                 setTodos(dataTodo)
               }}/>
               </div>
               </div>
  )
}
export default Todo