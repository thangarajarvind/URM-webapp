import React from 'react'
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';

const ApplicationStatusPage = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI(){
      let result = await fetch("http://localhost:8000/api/application");
      result = await result.json();
      setData(result)
  }
  fetchMyAPI()
},[])
const getColor = (value) => {
  if(value === 'selected') return 'green';
  if(value === 'pending') return 'orange';
  if(value === 'rejected') return 'red';
}
  console.warn("result",data)
  return (
    <div className="main-content">
    <div className="top-bar"><h3>Applications</h3></div>
    <br></br>
    <div className="recruiter-container" style={{ textAlign: 'center' }}>
    <div className="card">
        <h3>Application Status</h3>
        <table>
          <thead>
            <tr>
              <th>URM</th>
              <th>Name</th>
              <th>Job ID</th>
              <th>App date</th>
              <th>Interview date</th>
              <th>App ID</th>
              <th>Status</th>
            </tr>
          </thead>
          {
            data.map((item,myKey)=>
            <tbody key={myKey}>
            <tr>
              <td>{item.uid}</td>
              <td>{item.cand_name}</td>
              <td>{item.jid}</td>
              <td>{item.a_date}</td>
              <td>{item.i_date}</td>
              <td><Link to={`/recruiter/app_status/${item.id}`}>{item.id}</Link></td>
              <td style = {{color: getColor(item.status)}}>{item.status}</td>
            </tr>
            </tbody>
            )
          }
        </table>
        </div>
        </div>
    </div>
  )
}

export default ApplicationStatusPage