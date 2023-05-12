import styled from "styled-components";
import Colors from "./Constants/colors";
const S = {
    Input: styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
  
  &:focus {
      outline: none;
      border-color: blue;
    }
    `,
    Container: styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${Colors.Bg};
    color: black;
    `,
    Button: styled.button`
    background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkblue;
  }
    `
}

export default S
