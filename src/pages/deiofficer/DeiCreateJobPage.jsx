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
    const[role,setRole] = useState("")
    const[course,setCourse] = useState("")
    const[jobs,setJobs] = useState([])

    async function profileCreate(){
        
        let toAdd = true
        setJobs(jobs.concat({role,course}),() => console.log(jobs))
        console.log(jobs)
        const jobs1 = sessionStorage.getItem("DEI Job Openings")
        const jobs3 = jobs1 !== null ? JSON.parse(jobs1) : []
        jobs3.map((i) => {
            if(i.role === role && i.course === course) {
                alert("Preference already exists")
                toAdd = false
            }
        })
        if(toAdd) {
        const jobs2 = jobs3.concat({role,course})
        sessionStorage.setItem("DEI Job Openings",JSON.stringify(jobs2))
        console.log(jobs2)
        alert("Created Preference Successfully")
        }
    }

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
        <select className='dropdown' id="filter4" value={role} onChange={(e)=>setRole(e.target.value)}>
        <option value="">--select--</option>
            <option value="Post Doctorate">Post Doctorate</option>
            <option value="Professor">Professor</option>
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
        <select className='dropdown' id="filter6" value={course} onChange={(e)=>setCourse(e.target.value)}>
        <option value="">--select--</option>
            <option value="Data Mining">Data Mining</option>
            <option value="Web Data Management">Web Data Management</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
        </select>
    </div>

    <div>
        <label className="no_filter"> Organization</label><input className='dropdown' type="text" name="organization" value={organization} onChange={(e)=>setOrganization(e.target.value)} required/>
    </div>
    <div><label className="no_filter"> Salary</label> <input className='dropdown' type="text" name="salary" value={salary} onChange={(e)=>setSalary(e.target.value)} required/>
    </div>
    </div>
    <div >
    <div> <label className="no_filter"> Comments</label> </div><textarea name="review" rows="20" cols="40"></textarea>
    
    </div>
   
    <Link to='/deiofficer'>
    <button type="button" className='searchbtn' onClick={profileCreate}>Set Preferences</button></Link>
</form>
</div>
</div>
)
}

export default DeiCreateJobPage;