import React from 'react';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from "axios";

const  RecruiterHomePage =()  =>{
  const [data,setData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI(){
      let result = await fetch("http://localhost:8000/api/application");
      result = await result.json();
      setData(result)
  }
  fetchMyAPI()
},[])
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
const getColor = (value) => {
  if(value === 'selected') return 'green';
  if(value === 'pending') return 'orange';
  if(value === 'rejected') return 'red';
}
  console.warn("result",data)
  return (
    <div className="main-content">
      <div className="top-bar"><h3>Dashboard</h3></div>
    <div className="recruiter_container">
      <div className="card">
        <h3>User Approval</h3>
        <table>
          <thead>
            <tr>
              <th>URM ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Approval</th>
            </tr>
          </thead>
          {
            user.map((item,myKey)=>(
            <tbody key={myKey}>
            <tr>
              <td><Link to={`/recruiter/cand_details/${item.fname}`}>{item.id}</Link></td>
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
      </div>
      <div className="card">
        <h3>Application Status</h3>
        <table>
          <thead>
            <tr>
            <th>App ID</th>
              <th>URM id</th>
              <th>Name</th>
              <th>Job ID</th>
              <th>App date</th>
              <th>Status</th>
            </tr>
          </thead>
          {
            data.map((item,myKey)=>
            <tbody key={myKey}>
            <tr>
            <td><Link to={`/recruiter/app_status/${item.id}`}>{item.id}</Link></td>
              <td>{item.uid}</td>
              <td>{item.cand_name}</td>
              <td>{item.jid}</td>
              <td>{item.a_date}</td>
              <td style = {{color: getColor(item.status)}}>{item.status}</td>
            </tr>
            </tbody>
            )
          }
        </table>
      </div>
    </div>
    </div>
  );
}

export default RecruiterHomePage;
