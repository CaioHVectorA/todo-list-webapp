import React, { useState } from 'react'
import { AiOutlineCheck,AiOutlineRight,AiFillPhone } from "react-icons/ai";
const Division = () => {
   return <div style={{backgroundColor: 'rgba(255,255,255,.2)',width: '70%',height: '2px',borderRadius: '25px',margin: '12px 0px'}}></div>
}


const Item = ({Icon, Name, Ref}) => {
    const [selected,setSelect] = useState(false)
    return (
        <div className='HoverBackground' style={{display: 'flex',padding: '10px 6px',borderRadius: '5px',alignItems: 'center',gap: '6px',transition: '300ms'}}>
        <Icon style={{color: 'white',fontSize: '24px'}}/>
        <h2 style={{width: '100%',fontSize: `${346 / Name.length}px`}}>{Name}</h2> {/*depois, no código de criar, deixar um max lenght pra nao ter como fazer um Name minúsculo.*/}
        <AiOutlineRight style={{fontSize: '24px',alignSelf: 'center',marginTop: '2.6px'}}/>
        </div>
    )
}
const Menu = () => {
  return (
    <div style={{height: '100vh',color: 'white',paddingTop: '32px',width: '300px',display: 'flex',flexDirection: 'column',alignItems: 'center',backgroundColor:'#1A202E'}}>
        <div style={{display: 'flex',alignItems: 'center',gap: '12px'}}>
        <AiOutlineCheck style={{color: 'white',fontSize: '54px'}}/>
        <h1>To do List</h1>
        </div>
        <a href='github.com/caiohvectora'>by CaioH</a>
        <Division />
        <Item Icon={AiOutlineCheck} Name={'Fazer o site todolist'}/>
        <Division />
        <Item Icon={AiFillPhone} Name={'Ligar pro et bilu'}/>
    </div>

  )
}

export default Menu