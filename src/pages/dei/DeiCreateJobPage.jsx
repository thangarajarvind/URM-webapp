import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';

const DeiCreateJobPage = () => {

    const[jobrole,setJobrole] = useState("")
    const[typeofcontract,setTypeofcontract] = useState("")
    const[courses,setCourses] = useState("")
    const[organization,setStreet] = useState("")
    const[salary,setSalary] = useState("")
    const[comments,setComments] = useState("")

       async function deijobs(){
        let item = {}
        console.warn(item)
        
    let result = await fetch("http://localhost:8000/api/deijobs",{
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
    <div className="top-bar1"><h3>DEI Jobs</h3></div>
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
        <label className="no_filter"> Organization</label><input className='dropdown' type="text" name="organization" value={organization} onChange={(e)=>setOrganization(e.target.value)} required/>
    </div>
    <div><label className="no_filter"> Salary</label> <input className='dropdown' type="text" name="salary" value={salary} onChange={(e)=>setSalary(e.target.value)} required/>
    </div>
    </div>
    <div className="column">
    <div> <label className="no_filter"> Comments</label> </div><textarea name="review" rows="20" cols="40"></textarea>
    
    </div>
    <label className="no_filter">If job requirements meet Diversity, Equity, and Inclusion then Approve or Reject</label>
      <input type="radio" id="dei_yes"  name="DEI" value="Accept"/>
      <label for="dei_yes" className='dropdown'>Accept</label>
      <input type="radio" id="dei_no" name="DEI" value="Reject"/>
      <label for="dei_no" className='dropdown'>Reject</label>
    <Link to='/deiofficer/jobDescription'></Link>
    <Link to='/deiofficer/jobDescription'>
    <button type="button" className='searchbtn'>Set Preferences</button></Link>
</form>
</div>
</div>
)
}

export default DeiCreateJobPage;