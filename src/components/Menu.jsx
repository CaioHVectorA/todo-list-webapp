import React, { useContext, useState } from "react";
import {
  AiOutlineCheck,
  AiOutlineRight,
  AiFillPhone,
  AiOutlinePlus,
} from "react-icons/ai";
import UserContext from "./UserContext";
import mockupData from "../BackEndMockup";
import styled from "styled-components";
import { useNavigate } from "react-router";
const DivAdd = styled.div`
  transition: 300ms;
padding: 2px 35px;
border-radius: 80px;
margin-top: 32px;
  background: transparent;
  &:hover {
      cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const Division = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,.2)",
        width: "100%",
        height: "2px",
        borderRadius: "25px",
        margin: "12px 0px",
      }}
    ></div>
  );
};

const Item = ({ Icon, Name, Ref }) => {
  const [selected, setSelect] = useState(false);
  const { setTexto } = useContext(UserContext);
  return (
    <div
      className="HoverBackground"
      onClick={() => setTexto(Name)}
      style={{
        display: "flex",
        padding: "10px 6px",
        borderRadius: "5px",
        alignItems: "center",
        gap: "6px",
        transition: "300ms",
        width: "250px",
      }}
    >
      <Icon style={{ color: "white", fontSize: "24px" }} />
      <h2 style={{ width: "100%", fontSize: `${330 / Name.length}px` }}>
        {Name}
      </h2>{" "}
      {/*depois, no código de criar, deixar um max lenght pra nao ter como fazer um Name minúsculo.*/}
      <AiOutlineRight
        style={{ fontSize: "24px", alignSelf: "center", marginTop: "2.6px" }}
      />
    </div>
  );
};
const Menu = () => {
    const nav = useNavigate()
  const [workList, setWorkList] = useState([]);
  return (
    <div
      className="Scroll"
      style={{
        height: "calc(100vh - 32px)",
        overflowY: "scroll",
        color: "white",
        paddingTop: "32px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1A202E",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <AiOutlineCheck style={{ color: "white", fontSize: "54px" }} />
        <h1>To do List</h1>
      </div>
      <a href="github.com/caiohvectora">by CaioH</a>
      {/* <Division />
        <Item Icon={AiOutlineCheck} Name={'Fazer o site todolist'}/>
        <Division />
        <Item Icon={AiFillPhone} Name={'Ligar pro et bilu'}/> */}
      {workList.map(({ Icon, Name, Ref }) => (
        <div key={Name + Ref}>
          <Item Icon={Icon} Name={Name} Ref={Ref} />
          <Division />
        </div>
      ))}
      <DivAdd

      >
        <AiOutlinePlus
          style={{ borderRadius: "25px", fontSize: "50px" }}
          radius={50}
        />
      </DivAdd>
    </div>
  );
};

export default Menu;
