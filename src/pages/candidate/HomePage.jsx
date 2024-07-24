import React, { useState,useEffect } from 'react';
import './css/Home_Content_CSS.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
  const modalOpen =() =>{}
  const closeModal =() =>{}

  //Job Postings Data
  const [data,setData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI(){
      let result = await fetch("http://localhost:8000/api/jobList");
      result = await result.json();
      setData(result)
  }
  fetchMyAPI()
  },[])

  //Applications
  const [app_data,setApp_Data] = useState([]);
  
  useEffect(() => {
    async function fetchMyAPI(){
      let result = await fetch("http://localhost:8000/api/application");
      result = await result.json();
      setApp_Data(result)
  }
  fetchMyAPI()
  },[])

  console.warn("result",data)
  //console.warn("result",data.id)

  async function Apply(app_data){
    console.warn(app_data)
    let result = await fetch("http://localhost:8000/api/jobPosting/"+id,{
      method:'POST',
      body:JSON.stringify(app_data),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    result = await result.json()
    console.warn("result",result)
    alert("New job added!")
    location.reload();

  }
  

  return (
    <div id="content">
      <div className="cand_row">
        <div className="cand_column cards-blue">
          <h2>Job Postings</h2>
          <hr />
          <div className="cards">
            {/*
            <div className="card">
              <h3>Assistant Analyst</h3>
              <h2>UTA</h2>
              <button id="applyBtn">Apply</button>
            </div>

            <div className="card">
              <h3>Research Assistant</h3>
              <h2>UTD</h2>
              <button id="applyBtn">Apply</button>
            </div>

            <div className="card">
              <h3>Research Assistant</h3>
              <h2>UCLA</h2>
              <button id="applyBtn">Apply</button>
            </div>
            */}
            {
            data.map((item,myKey)=>
            <div className="card">
              <h1>Position: {item.role}</h1>
              <h2>Institute: {item.institution}</h2>
              <h2>Dept: {item.department}</h2>
              <Link to={`/candidate/job_details/${item.jid}`}>Apply</Link>
            </div>
            )
          }



          </div>
          </div>

        <div className="cand_column cards-orange">
          <h2>In Progress</h2>
          <div className="cards">
            {/*
            <div className="card">
              <h3>TA</h3>
              <h2>UTA</h2>
              <button id="viewBtn" onClick={modalOpen}>View</button>
            </div>
            */}
            {
            app_data.map((item,myKey)=>
            <div className="card">
              <h3>Position:{item.position}</h3>
              <h2>Institution:{item.institution}</h2>
              <button id="applyBtn">Continue</button>
            </div>
            )
          }
          </div>

        </div>

        <div className="cand_column cards-green">
          <h2>Done</h2>
          <div className="cards">
            {/*
            <div className="card">
              <h3>TA</h3>
              <h2>UTA</h2>
              <button id="viewBtn" onClick={modalOpen}>View</button>
            </div>
            */}
          {
            app_data.map((item,myKey)=>
            <div className="card">
              <h3>Position:{item.position}</h3>
              <h2>Institution:{item.institution}</h2>
              <button id="applyBtn">Continue</button>
            </div>
            )
          }
          </div>
        </div>
      </div>
  
      {modalOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>UC San Diego</h2>
            <h3>TA</h3>
            <h3>Selected</h3>
          </div>
        </div>
      )} 
    </div>
  )
}

export default HomePage;