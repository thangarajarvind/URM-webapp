import './recruiter.css';
import {Link} from 'react-router-dom';
import React, { useState,useEffect } from 'react';

  const JobPostPage = () => {
  
  const [data,setData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI(){
      let result = await fetch("http://localhost:8000/api/jobList");
      result = await result.json();
      setData(result)
  }
  fetchMyAPI()
  },[])

  console.warn("result",data)
  //console.warn("result",data.id)
  
  return (
    <div className="main-content">
    <div className="top-bar"><h3>Jobs</h3></div>
    <br></br>
    <div className="container">
      <div className="card">
        <div className="title" style={{ textAlign: 'center' }}>
          <h1>Job Postings by Institutions</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>JID</th>
              <th>Institution</th>
              <th>Position</th>
              <th>Field/Subject</th>
            </tr>
          </thead>
          {
            data.map((item,myKey)=>
            <tbody key={myKey}>
            <tr>
              <td><Link to={`/recruiter/job_desc/${item.jid}`}>{item.jid}</Link></td>
              <td>{item.institution}</td>
              <td>{item.role}</td>
              <td>{item.department}</td>
            </tr>
            </tbody>
            )
          }
        </table>
        <form action='/recruiter/job_new'>
          <button className='r_button' style={{ marginLeft:'0px', width: '200px' }}>Create Job Posting</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default JobPostPage