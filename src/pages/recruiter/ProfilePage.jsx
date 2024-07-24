import { useState } from 'react';
import {} from '../../components/FormInputComponent';
import './recruiter.css';

const ProfilePage = () => {
  const[fname,setFname] = useState("")
  const[mname,setMname] = useState("")
  const[lname,setLname] = useState("")
  const[mobile,setMobile] = useState("")
  const[email,setEmail] = useState("")
  const[institution,setInstitution] = useState("")
  const[preference,setPreference] = useState("")

  let id = sessionStorage.getItem('id');

  async function profileUpdate(){
    let item = {id,fname,mname,lname,mobile, email,institution,preference}
    console.warn(item)

    let result = await fetch("http://localhost:8000/api/profileUpdate/"+id,{
      method:'PUT',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    result = await result.json()
    console.warn("result",result)
    alert("Profile Updated!")
    location.reload()
  }
  

  return (
    <div className="main-content">
    <div className="top-bar"><h3>Profile</h3></div>
    <br></br>
    <div className="recruiter-container">
      <div className="card">
          <div className="title" style={{ marginLeft: '0px' }}>
            <h1>Update Profile</h1>
          </div>
          <div className="content">
            <br></br>
            <p>Name:</p>
            <input type="text" name="First" value={fname} onChange={(e)=>setFname(e.target.value)} placeholder="First" />
            <input type="text" name="Middle" value={mname} onChange={(e)=>setMname(e.target.value)} placeholder="Middle" style={{ marginLeft: '10px' }} />
            <input type="text" name="Last" value={lname} onChange={(e)=>setLname(e.target.value)} placeholder="Last" style={{ marginLeft: '10px' }} />
          </div>
          <br></br>
          <div className="content">
            <p>Mobile Number:</p>
            <input type="text" name="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Enter mobile number" />
          </div>
          <br></br>
          <div className="content">
            <p>Email ID:</p>
            <input type="text" name="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email id" />
          </div>
          <br></br>
          <div className="content">
            <p>Institutions Hiring:</p>
            <input type="text" name="Institutions" value={institution} onChange={(e)=>setInstitution(e.target.value)} placeholder="Enter the institutions" />
          </div>
          <br></br>
          <div className="content">
            <p>Preferences:</p>
            <input type="text" name="Preferences" value={preference} onChange={(e)=>setPreference(e.target.value)} placeholder="Enter the preferences" />
          </div>
          <button onClick={profileUpdate} className='r_button' style={{ marginLeft:'0px' }}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default ProfilePage