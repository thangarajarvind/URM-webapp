import React, { useState,useEffect } from 'react';
import "./chat_css.css"




const ChatUIComponent = () => {

  
  let id = sessionStorage.getItem('id');
  console.log(id)
	let name = sessionStorage.getItem('name');
	let role = sessionStorage.getItem('role');
  
  let sender_id=id
  //static reciever id for testing
  let reciever_id=67
  let identifier='['+sender_id+',67]';

  const [chat_data,setChat_Data] = useState([]);  
  useEffect(() => {
    async function fetchMyAPI(){
      const response =await fetch("http://localhost:8000/api/getchats/"+identifier);
      console.warn("Response",response);
      let msg1=response[0];
      let msg2=response[1];
      console.warn("Messages:", msg1 , msg2)
      const result = await response.json();
      console.warn("Result",result);
      setChat_Data(result)
  }
  fetchMyAPI()
  },[])

  const [sender,setSender] = useState([]);  
  async function check_sender(c_id){
    if (c_id==id)
    {setSender = true;}
    else
    {setSender = false;} 
  }

  const [s_id,setSID] = useState("")
  const [r_id,setRID] = useState("")
  const [msg,setMSG] = useState("")

  function handleSend(){
    let message = msg
    let send_data = {sender_id,reciever_id,message}
    console.log("Send Message",send_data)
    fetch("http://localhost:8000/api/sendMessage",{
      method:'POST',
      body:JSON.stringify(send_data),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    //console.warn("Send result",send_result)
  }

  

  return (
    <div className='chat-ui'>
      <div className="chat-area">
        <div className="chat-user"><h3>Omeya</h3></div>
        <div className="chats">
          <div className="chat">
            {/*
              <div className="left">Hey!</div>
              <div className="right">Hi!</div>
            */}
            {
            chat_data.map((item,myKey)=>
            {
            if (item.sender_id == id) {return (<div className="left">{item.message}</div>)}  else {return (<div className="right">{item.message}</div>)}
            }
            )
            }
          
          </div>
        </div>
        <div className="chat-box">
  <form onSubmit={(e) => {
    e.preventDefault();
    handleSend();
  }}>
    <input name='sender_id' type="hidden" value={sender_id} onChange={(e) => setSID(e.target.value)} />
    <input name='reciever_id' type="hidden" value={reciever_id} onChange={(e) => setRID(e.target.value)} />
    <input name='message' className='chat-field' placeholder='Message' value={msg} onChange={(e) => setMSG(e.target.value)} autoFocus />
    <button type="submit">Send</button>
  </form>
</div>
      </div>
      <div className="chat-users"></div>
    </div>
  )
}

export default ChatUIComponent;