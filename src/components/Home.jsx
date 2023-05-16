import React, { useContext, useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import UserContext from "./UserContext";
import { BiChevronUp,BiChevronDown } from "react-icons/bi";
import { AiOutlineEllipsis, AiOutlineClose,AiOutlinePlus,AiFillPlusCircle,AiFillCloseCircle } from "react-icons/ai";
import { FaTrash } from 'react-icons/fa';
import styled from "styled-components";
import S from "../utilities/Styles";
import Todo from './Todo'
import { useNavigate } from "react-router";
import Colors from '../utilities/Constants/colors'
import workIcons from '../utilities/WorkIcons'
const ButtonAdd = styled.button`
  transition: 300ms;
padding: 2px 10px;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 32px;
  background: transparent;
  &:hover {
      cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const ListItem = styled.li`
  background-color: #fff;
  padding: 12px 32px;
  transition: 520ms;
  width: 120px;
  &:hover {
    cursor: pointer;
    background-color: #e7e7e7;
  }
`;
function Header() {
  const [open, setOpen] = useState(false);
  const { guestMode } = useContext(UserContext);
  const nav = useNavigate();
  return (
    <header
      style={{
        width: "calc(100% - 40px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "13px 20px",
        backgroundColor: "white",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div>
        {!guestMode ? (
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                backgroundColor: "#d9d9d9",
                overflow: 'hidden',
              }}
            >
              <img style={{width: '100%',height: '100%'}}
                src={
                  "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
              />
            </div>
            <h2>PlaceHolder</h2>
          </div>
        ) : (
          <div>
            <S.Button onClick={() => nav("/")}>ENTRAR</S.Button>
          </div>
        )}
      </div>
      <div style={{ position: "relative" }}>
        {!open && (
          <AiOutlineEllipsis
            onClick={() => setOpen(!open)}
            style={{ fontSize: "32px", cursor: "pointer" }}
          />
        )}
        {open && (
          <AiOutlineClose
            onClick={() => setOpen(!open)}
            style={{ fontSize: "32px", cursor: "pointer" }}
          />
        )}
        {open && (
          <ul
            style={{
              borderRadius: "0px",
              position: "absolute",
              top: "53px",
              left: "-70px",
            }}
          >
            <ListItem style={{}}>Teste</ListItem>
            <ListItem style={{ color: "#db4646" }}>Logout</ListItem>
          </ul>
        )}
      </div>
    </header>
  );
}

function Main() {
  const { todoData,setTodos,Ref, setRef } = useContext(UserContext);
  const [modal,setModal] = useState(false)
  const [colorInput,setCI] = useState('#000000')
  const [colorText, setColorText] = useState('#000000')
  const inputref = useRef()
  useEffect(() => {
    const intervalID = setInterval(() => {
    if (Ref && inputref.current && inputref.current !== document.activeElement  && inputref.current.value === '') {
      setTodos(prevState => {
          const updatedTodos = [...prevState];
          const itemToModify = updatedTodos[Ref.Ref];
          itemToModify.Name = 'Lista sem nome'
          return updatedTodos;
      })
    } 
        return () => {
      clearInterval(intervalID);
    };
    }, 500)
  }, [Ref])
  useEffect(() => {
    if (todoData !== [] && todoData[0] && todoData[0].Name) {
    localStorage.setItem('TODO_LIST_DATA',JSON.stringify(todoData))
    }
  }, [todoData])
  return (
    <div style={{ paddingTop: "27px", paddingLeft: "36px",width: 'calc(100% - 36px)',height: 'calc(100% - 27px)' }}>
        
        {modal && <div style={{width: '100vw',height: '100vh',borderRadius: '0px',display: 'flex',alignItems: 'center',justifyContent: 'center',position: 'absolute',left: '0px',top: '0px',backgroundColor: 'rgba(0,0,0,.5)'}}>
          <div className="Scroll" style={{width: '80%',height: '70%',background: 'white',borderRadius: '14px',padding: '16px 32px',overflow: 'auto'}}>
            <div style={{width: '100%',display: 'flex',justifyContent: 'space-between'}}>
            <AiFillCloseCircle style={{color: '#e76d89',fontSize: '48px',cursor: 'pointer'}} onClick={() => setModal(!modal)}  />
              <input type={'color'} value={colorInput} onChange={(e) => setCI(e.target.value)} />
            </div>
            <div>
              <h1>Escolha o ícone que mais combina com você!</h1>
              {workIcons.map(Categoria => (
                <div key={Categoria.nome}>
                  <h3 style={{marginBottom: '16px',marginTop: '16px'}}>{Categoria.nome}</h3>
              <div style={{display: 'flex',gap: '12px',flexWrap: 'wrap'}}> 
              {Categoria.icones.map(Icon => (
                <div key={Icon.nome} style={{display: "flex",flexDirection:'column',alignItems: 'center'}}>
                  <Icon.icone onClick={() => {
                        setTodos(prevState => {
                         const updatedTodos = [...prevState];
                         const itemToModify = updatedTodos[Ref.Ref];
                         itemToModify.Icon = Icon.icone;
                         itemToModify.IconStyle = colorInput
                         return updatedTodos;
                    });
                        // setRef(prevState => ({...prevState, Icon: Icon.icone}))
                        setModal(!modal)
                  }} style={{fontSize: '32px',color: colorInput,cursor: 'pointer'}}/>
                   <p>{Icon.nome}</p>
                </div>
              ))}
              </div>
                </div>
              ))}
            </div>
          </div>
        </div>}
{
  Ref &&
  <div>
    
      <div style={{display: 'flex',gap: '8px',alignItems: 'center'}}>
        {Ref.Icon !== null ? 
        <Ref.Icon style={{color: Ref.IconStyle ?  Ref.IconStyle : null}}/>
        :
        <AiFillPlusCircle onClick={() => setModal(!modal)} style={{fontSize: '32px',color: Colors.Main,cursor: 'pointer'}}/>
        }
        <div style={{display: 'flex',gap: '8px'}}>
   <input ref={inputref} style={{border: 'none',color: todoData[Ref.Ref].colorText,outline: 'none',width: todoData[Ref.Ref].Name.length * 26.3,maxWidth: '500px',backgroundColor: 'rgba(255,255,255,.1)',fontSize: '32px'}} value={todoData[Ref.Ref].Name} onChange={(e) => {
                            setTodos(prevState => {
                         const updatedTodos = [...prevState];
                         const itemToModify = updatedTodos[Ref.Ref];
                         itemToModify.Name = e.target.value;
                         return updatedTodos;
                    });
  }}/>
  <input type={"color"} value={todoData[Ref.Ref].colorText} onChange={({target}) => {
  setTodos(prevState => {
     const updatedTodos = [...prevState];
    const itemToModify = updatedTodos[Ref.Ref];
    itemToModify.colorText = target.value
    return updatedTodos;
                    });
  }}/>
          </div>
      </div>
          <div style={{display: 'flex',flexDirection: 'column',gap: '12px',marginTop: '24px'}}>
           {Ref.Todos.map((Item,index) => (
             <Todo Item={Item} index={index}/>
           ))}
            </div>
            <ButtonAdd onClick={() => {
              const prevState = [...todoData]
              const itemToModify = prevState[Ref.Ref]
              const todo = {
                Nome: 'Minha Tarefa',
                Feito: false,
                color: '#000',
              }
              itemToModify.Todos.push(todo)
             setTodos(prevState)
            }} style={{width: '80%',border: '1px solid rgba(0,0,0,.2)',marginRight: 'auto',marginLeft: 'auto'}}>
            <AiFillPlusCircle style={{fontSize: '54px'}}/>
              </ButtonAdd>
  </div>
      
}
    </div>
  );
}

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <Menu />
      <div
        style={{
          width: "calc(100% - 300px)",
          overflowY: "auto",
          height: "100vh",
        }}
      >
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
