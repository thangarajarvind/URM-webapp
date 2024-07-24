import React, { useState,useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";

import './css/Home_Content_CSS.css'

const NewApplication = () => {


    const {id} = useParams();
    const [job_data,setjob_data] = useState([]);
    const [data,setData] = useState([]);
    useEffect(() => {
      async function fetchMyAPI(){
        let result = await fetch("http://localhost:8000/api/job_desc/"+id);
        result = await result.json();
        setjob_data(result)
        setData(result)
    }
    fetchMyAPI()
  },[])
  console.warn("Job Data",job_data)
  console.warn("Job ID",id)



  return (
    <div className="main-content">
    <div className="top-bar"><h3>Candidates</h3></div>
    <div className="container">
      <form action="/recruiter/interview">
        <div className="card">
          <div className="title" style={{ textAlign: 'center' }}>
            <h1>Job details</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Attributes</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Institution</td>
                {job_data.map(item => (
                  <td>{item.institution}</td>
                ))}
                </tr>
              <tr>
                <td>Position</td>
                {job_data.map(item => (
                  <td>{item.role}</td>
                ))}
              </tr>
              <tr>
                <td>Dept</td>
                {job_data.map(item => (
                  <td>{item.department}</td>
                ))}
              </tr>
              <tr>
                <td>Hours</td>
                {job_data.map(item => (
                  <td>{item.hours}</td>
                ))}
              </tr>
              <tr>
                <td>Pay</td>
                {job_data.map(item => (
                  <td>{item.pay}</td>
                ))}
              </tr>
              <tr>
                <td>Location</td>
                {job_data.map(item => (
                  <td>{item.ethnicity}</td>
                ))}
              </tr>
              <tr>
                <td>Description</td>
                {job_data.map(item => (
                  <td>{item.description}</td>
                ))}
              </tr>
            </tbody>
          </table>
            <button className='r_button'  style={{ textAlign: 'center', marginLeft: '0px' }}>Apply</button>
        </div>
      </form>
    </div>
    </div>

  )
    
}

export default NewApplication;