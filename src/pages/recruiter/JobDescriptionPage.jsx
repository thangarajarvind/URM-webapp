import React, { useState, useEffect } from "react";
 
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import './recruiter.css';

const JobDescriptionPage = () => {     
    const {id} = useParams();
    const [data,setData] = useState([]);

    useEffect(() => {
      async function fetchMyAPI(){
        let result = await fetch("http://localhost:8000/api/job_desc/"+id);
        result = await result.json();
        setData(result)
    }
    fetchMyAPI()
  },[])
  console.warn(data)

  return (
    <div className="main-content">
    <div className="top-bar"><h3>Jobs</h3></div>
    <div className="recruiter-container">
      <div className="card">
        <div className="title" style={{ textAlign: 'center' }}>
          <h1>Job Postings</h1>
        </div>
        <div className="content">
        {data.map(item => (
            <h3>{item.institution}</h3>
          ))} 
        </div>
        <div className="content">
          <h4>Designation:</h4>
          {data.map(item => (
            <p>{item.role}</p>
          ))} 
        </div>
        <br/>
        <div className="content">
          <h4>Qualification:</h4>
          {data.map(item => (
            <p>{item.role}</p>
          ))} 
        </div>
        <br/>
        <div className="content">
          <h4>Work Hours:</h4>
          {data.map(item => (
            <p>{item.hours}$/hour</p>
          ))} 
        </div>
        <br/>
        <div className="content">
          <h4>Pay Scale:</h4>
          {data.map(item => (
            <p>{item.pay} hours</p>
          ))} 
        </div>
        <br/>
        <div className="content">
          <h4>Preferred location:</h4>
          {data.map(item => (
            <p>{item.location}</p>
          ))} 
        </div>
        <br/>
        <div className="content">
          <h4>Preferred Ethnicity:</h4>
          {data.map(item => (
            <p>{item.ethnicity}</p>
          ))} 
        </div>
        <br/>
        <div className="content">
          <h4>Description:</h4>
          {data.map(item => (
            <p>{item.description}</p>
          ))} 
        </div>
      </div>
    </div>
    </div>
  )
}

export default JobDescriptionPage;