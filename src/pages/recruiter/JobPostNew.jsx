import './recruiter.css';
import { useState } from 'react';

const JobPostNew = () => {
  const[institution,setInstitution] = useState("")
  const[role,setRole] = useState("")
  const[department,setDepartment] = useState("")
  const[hours,setHours] = useState("")
  const[pay,setPay] = useState("")
  const[ethnicity,setEthnicity] = useState("")
  const[location,setLocation] = useState("")
  const[description,setDescription] = useState("")
  const[jid,setJid] = useState("")

  async function jobPosting(){
    let item = {institution,role,department, hours,pay,ethnicity,location,description,jid}
    console.warn(item)

    let result = await fetch("http://localhost:8000/api/jobPosting",{
      method:'POST',
      body:JSON.stringify(item),
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
    <div className="main-content">
    <div className="top-bar"><h3>Jobs</h3></div>
    <div className="recruiter-container">
    <div className="card">
                <h1 style={{fontFamily: "Arial, Helvetica, sans-serif", margintop: "0px"}}>New Job posting</h1>
                    <br></br>
                    <form>
                    <div className="ct">
                        <p style={{ display: "inline"}}>Job ID:</p>
                        <input type="text" name="id" value={jid} onChange={(e)=>setJid(e.target.value)} placeholder="Enter Job ID" required/>
                        <p style={{display: "inline", marginLeft: "50px"}}>Institution Name:</p>
                        <input type="text" name="name" value={institution} onChange={(e)=>setInstitution(e.target.value)} placeholder="Enter institution name" required/>
                    </div>
                    <br></br>
                    <div className="ct">
                        <p style={{display: 'inline'}}>Job Role:</p>
                        <input type="text" name="role" value={role} onChange={(e)=>setRole(e.target.value)} placeholder="Enter the Job Role" required/>
                        <p style={{display: "inline", marginLeft: "50px"}}>Department:</p>
                        <input type="text" name="dept" value={department} onChange={(e)=>setDepartment(e.target.value)} placeholder="Enter the Department" required/>
                    </div>
                    <br></br>
                    <div className="ct">
                        <p style={{display: "inline"}}>Hours per week:</p>
                        <input type="text" name="hours" value={hours} onChange={(e)=>setHours(e.target.value)} placeholder="Enter Hours per week" required />
                        <p style={{display: 'inline', marginLeft: "50px"}}>Pay per hour:</p>
                        <input type="text" name="pay" value={pay} onChange={(e)=>setPay(e.target.value)} placeholder="Enter the pay per hour" required />
                    </div>
                    <br></br>
                    <div className="ct">
                        <p>Preferred Ethnicity:</p>
                        <input type="text" name="ethnicity" value={ethnicity} onChange={(e)=>setEthnicity(e.target.value)} placeholder="Enter preferred ethnicity" required/>
                    </div>
                    <br></br>
                    <div className="ct">
                        <p>Preferred Location:</p>
                        <input type="text" name="location" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Enter preferred location" required />
                    </div>
                    <br></br>
                    <div className="ct">
                        <p>Job description:</p>
                        <textarea name="job_desc" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Job description" required ></textarea>
                    </div>
                <button type='submit' className='r_button'  onClick={jobPosting}  style={{ textAlign: 'center', marginLeft: '0px' }}>Create</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default JobPostNew