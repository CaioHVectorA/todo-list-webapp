import React, { useContext, useEffect, useState } from "react";
import Menu from "./Menu";
import UserContext from "./UserContext";
import { AiOutlineEllipsis, AiOutlineClose,AiOutlinePlus,AiFillPlusCircle,AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import S from "../utilities/Styles";
import { useNavigate } from "react-router";
import Colors from '../utilities/Constants/colors'
import workIcons from '../utilities/WorkIcons'
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
        )}⁹
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
                        console.log(todoData)
  return (
    <div style={{ paddingTop: "27px", paddingLeft: "36px",width: '100%',height: '100%' }}>
        
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
      <div style={{display: 'flex',gap: '8px',alignItems: 'center'}}>
        {Ref.Icon !== null ? 
        <Ref.Icon style={{color: Ref.IconStyle ?  Ref.IconStyle : null}}/>
        :
        <AiFillPlusCircle onClick={() => setModal(!modal)} style={{fontSize: '32px',color: Colors.Main,cursor: 'pointer'}}/>
        }
   <input style={{border: 'none',outline: 'none',backgroundColor: 'rgba(255,255,255,.1)',fontSize: '32px'}} value={Ref.Name} onChange={(e) => {
    setRef(prevState => ({...prevState, Name: e.target.value}))
  }}/>
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
