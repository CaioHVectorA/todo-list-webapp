import React, { useContext } from 'react'
import Menu from './Menu'
import UserContext from './UserContext'

const Home = () => {
    const {texto} = useContext(UserContext)
  return (
    <div style={{display: 'flex'}}>
        <Menu />
        <div style={{maxWidth: 'calc(100% - 300px)',overflowY: 'auto',height: '100vh'}}>
            {/* conteudo aqui */}
            {texto}
        </div>
    </div>
  )
}

export default Home