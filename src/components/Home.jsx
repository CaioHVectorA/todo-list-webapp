import React, { useContext, useState } from "react";
import Menu from "./Menu";
import UserContext from "./UserContext";
import { AiOutlineEllipsis, AiOutlineClose,AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import S from "../utilities/Styles";
import { useNavigate } from "react-router";
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
  const { texto } = useContext(UserContext);
  return (
    <div style={{ paddingTop: "27px", paddingLeft: "36px" }}>
      <h1>{texto}</h1>
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
