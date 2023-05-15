import React, { useContext, useEffect, useState } from "react";
import Menu from "./Menu";
import UserContext from "./UserContext";
import { AiOutlineEllipsis, AiOutlineClose,AiOutlinePlus,AiFillPlusCircle } from "react-icons/ai";
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
  console.log(todoData)
  return (
    <div style={{ paddingTop: "27px", paddingLeft: "36px" }}>
        
{
  Ref &&
      <div style={{display: 'flex',gap: '8px',alignItems: 'center'}}>
        {Ref.Icon !== null ? 
        <Ref.Icon />
        :
        <AiFillPlusCircle onClick={() => console.log('TEM QUE MOSTRAR OOOOOOOOO TRECO DE ESCOLHER ICONE.')} style={{fontSize: '32px',color: Colors.Main,cursor: 'pointer'}}/>
        }
   <input style={{border: 'none',outline: 'none',backgroundColor: 'rgba(255,255,255,.1)',fontSize: '32px'}} value={Ref.Name} onChange={(e) => {
    setRef(prevState => ({...prevState, Name: e.target.value}))
    const tempArray = [...todoData]
    tempArray[Ref.Ref].Name = e.target.value
    console.log(todoData)
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
