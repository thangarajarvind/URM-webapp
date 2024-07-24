import { useState, useEffect } from 'react';
import {get_users} from '../api/accounts';
import { NavLink } from 'react-router-dom';
import React from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

const AdminDashTableComponent = () => {
  const [users, setUsers] =useState([]);


  const [user,setUser] = useState([]);
  useEffect(() => {
    async function fetchMyAPI(){
      let userResult = await fetch("http://localhost:8000/api/userApproval");
      userResult = await userResult.json();
      setUser(userResult)
  }
  fetchMyAPI()
},[])

async function approveUser(id){
  let result = await fetch("http://localhost:8000/api/userApproved/"+id,{
  method:'PUT',
  body:JSON.stringify(),
  headers:{
      "Content-Type":'application/json',
      "Accept":'application/json'
  }
  })
  result = await result.json()
  console.warn("result",result)
  alert("User Approved!")
  location.reload()
}
async function rejectUser(id){
  axios.delete('http://localhost:8000/api/userRejected/'+id).then(function(response){
            console.log(response.data);
        });
        alert("User Rejected!");
        location.reload();
}
return (
    <table>
      <thead>
        <tr>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Actions</th>
        </tr>
       </thead>
        {
            user.map((item,myKey)=>(
            <tbody key={myKey}>
            <tr>
              <td>{item.fname}</td>
              <td>{item.email}</td>
              <td>
              <div className="actions">
                  <input type="button" onClick={() => approveUser(item.id)} className="approve" name="approve" value="Approve" />
                  <input type="button" onClick={() => rejectUser(item.id)} className="reject" name="reject" value="Reject" />
                </div>
              </td>
            </tr>
            </tbody>
          ))
}      
    </table>
  )
}

export default AdminDashTableComponent;