import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';

const AcademiaCreateJobPage = () => {

    const[organisation,setOrganisation] = useState("")
    const[salary,setSalary] = useState("")
    const[about,setAbout] = useState("")
    
    async function profileCreate(){
        let item = {organisation,salary,about}
        console.warn(item)

        
    let result = await fetch("http://localhost:8000/api/profileCreate",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
          "Content-Type":'application/json',
          "Accept":'application/json'
        }
      })
      result = await result.json()
      console.warn("result",result)
    }


  return (
    <div className="main-content">
    <div className="top-bar1"><h3>Job Postings</h3></div>
    <div className="container1">
<form method="post">
    <div className="column">
    <div className="filter1">
        <label for="filter4">Job Role</label>
        <select className='dropdown' id="filter4">
            <option value="option1">Post Doctorate</option>
            <option value="option2">Professor</option>
        </select>
    </div>
    <div className="filter1">
        <label for="filter5">Type Of Contract </label>
        <select className='dropdown' id="filter5">
            <option value="optionA">Data Mining</option>
            <option value="optionB">Web Data Management</option>
            <option value="optionC">Artificial Intelligence</option>
        </select>
    </div>
    <div className="filter1">
        <label for="filter6">Courses</label>
        <select className='dropdown' id="filter6">
            <option value="optionA">Data Mining</option>
            <option value="optionB">Web Data Management</option>
            <option value="optionC">Artificial Intelligence</option>
        </select>
    </div>

    <div>
        <label className="no_filter"> Organization</label><input className='dropdown' name="organisation" value={organisation} onChange={(e)=>setOrganisation(e.target.value)}   placeholder=" UTA" type="text" required/>
    </div>
    <div><label className="no_filter"> Salary</label> <input className='dropdown' name="salary" value={salary} onChange={(e)=>setSalary(e.target.value)}   placeholder="$" type="text" required/>
    </div>
    </div>
    <div className="column">
    <div> <label className="no_filter"> About Job</label> </div><textarea name="about" rows="20" cols="40"  value={about} onChange={(e)=>setAbout(e.target.value)}   placeholder="about"></textarea>
    
    </div>
    <label className="no_filter">If job requirements meet Diversity, Equity, and Inclusion then request for DEI Approval</label>
      <input type="radio" id="dei_yes"  name="DEI" value="Yes"/>
      <label for="dei_yes" className='dropdown'>Yes</label>
      <input type="radio" id="dei_no" name="DEI" value="No"/>
      <label for="dei_no" className='dropdown'>No</label>
    <Link to='/academia/jobDescription'>
    <button type="button" className='searchbtn' onClick={profileCreate} style={{ marginLeft:'0px' }}>Create</button></Link>
</form>
</div>
</div>
)
}

export default AcademiaCreateJobPage;