import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';

const AcademiaCreateJobPage = (props) => {

    const[organisation,setOrganisation] = useState("")
    const[salary,setSalary] = useState("")
    const[about,setAbout] = useState("")
    const[role,setRole] = useState("")
    const[course,setCourse] = useState("")
    const[jobs,setJobs] = useState([])
    
    async function profileCreate(){
        let item = {organisation,salary,about}
        let toAdd = true
        setJobs(jobs.concat({role,course}),() => console.log(jobs))
        console.log(jobs)
        const jobs1 = sessionStorage.getItem("Job Openings")
        const jobs3 = jobs1 !== null ? JSON.parse(jobs1) : []
        jobs3.map((i) => {
            if(i.role === role && i.course === course) {
                alert("Job posting already exists")
                toAdd = false
            }
        })
        if(toAdd) {
        const jobs2 = jobs3.concat({role,course})
        sessionStorage.setItem("Job Openings",JSON.stringify(jobs2))
        console.log(jobs2)
        alert("Created Profile Successfully")
        }
        

        
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
        <select className='dropdown' id="filter4" value={role} onChange={(e)=>setRole(e.target.value)}>
            <option value="">--select--</option>
            <option value="Post Doctorate">Post Doctorate</option>
            <option value="Professor">Professor</option>
        </select>
    </div>
    <div className="filter1">
        <label for="filter5">Type Of Contract </label>
        <select className='dropdown' id="filter5">
        <option value="">--select--</option>
            <option value="optionA">Part-Time</option>
            <option value="optionB">Full-Time</option>
            <option value="optionC">Contract</option>
        </select>
    </div>
    <div className="filter1">
        <label for="filter6">Courses</label>
        <select className='dropdown' id="filter6" value={course} onChange={(e)=>setCourse(e.target.value)}>
        <option value="">--select--</option>
            <option value="Data Mining">Data Mining</option>
            <option value="Web Data Management">Web Data Management</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
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
    <Link to='/academia'>
    <button type="button" className='searchbtn' onClick={profileCreate} style={{ marginLeft:'0px' }}>Create</button></Link>
</form>
</div>
</div>
)
}

export default AcademiaCreateJobPage;