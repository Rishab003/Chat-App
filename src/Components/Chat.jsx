import React, { useContext } from "react";
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
    const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Kushal</span>
        <div className='chatIcons'>
          <img src="https://cdn3.iconfinder.com/data/icons/user-interface-3-3/34/254-512.png" alt="" />
          <img src="https://cdn1.iconfinder.com/data/icons/avatar-1-2/512/Add_User1-512.png" alt="" />
          <img src="https://th.bing.com/th/id/OIP.LaCsBcXmFUT70AcezmM1jgHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};
export default Chat;