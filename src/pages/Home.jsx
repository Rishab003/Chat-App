import React from 'react'
import Sidebar from '../Components/SideBar'
import Chat from '../Components/Chat'
const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}
export default Home;