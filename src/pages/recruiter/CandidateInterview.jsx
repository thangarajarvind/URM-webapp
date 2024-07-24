import React from 'react'
import { useState } from 'react';

const CandidateInterview = () => {

  const[jid,setJid] = useState("")
  const[uid,setUid] = useState("")
  const[iid,setIid] = useState("")
  const[date,setDate] = useState("")
  const[time,setTime] = useState("")
  const[app_no,setAppno] = useState("")
  const[meet_link,setMeetlink] = useState("")
  const[notes,setNotes] = useState("")

  async function interview(){
    let item = {jid,uid,iid,date,time,app_no,meet_link,notes}
    console.warn(item)

    let result = await fetch("http://localhost:8000/api/interview",{
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
    <div className="top-bar"><h3>Interview</h3></div>
    <br></br>
    <div className="container">
      <div className="card">
        <h1 style={{ fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '20px' }}>Candidate Interview</h1>
          <br />
          <div className="card" style={{ height: '270px' }}>
        <div className="title" style={{ textAlign: 'center', marginTop: '0px' }}>
          <h1>Job posting details</h1>
        </div>
        <div className="ct1">
          <p>Job posting ID:</p>
          <input type="text" name="Job" value={jid} onChange={(e)=>setJid(e.target.value)} placeholder="Enter Job ID" />
        </div>
        <div className="title" style={{ textAlign: 'center', marginTop: '-5px' }}>
          <h1>Candidate details</h1>
        </div>
        <div className="ct1">
          <p>URM ID:</p>
          <input type="text" name="URM" value={uid} onChange={(e)=>setUid(e.target.value)} placeholder="Enter URM ID" />
        </div>
      </div>
      <br></br>
          <div className="ct">
            <p>Interview No:</p>
            <input type="text" name="Interview" value={iid} onChange={(e)=>setIid(e.target.value)} placeholder="Enter Interview No" />
          </div>
          <br></br>
          <div className="ct">
            <p style={{ display: 'inline' }}>Date of Interview:</p>
            <input type="date" name="date" value={date} onChange={(e)=>setDate(e.target.value)} />&emsp;
            <p style={{ display: 'inline' }}>Time of Interview:</p>
            <input type="time" name="time" value={time} onChange={(e)=>setTime(e.target.value)} />
          </div>
          <br></br>
          <div className="ct">
            <p>Application No:</p>
            <input type="text" name="Application" value={app_no} onChange={(e)=>setAppno(e.target.value)} placeholder="Enter Application No" />
          </div>
          <br></br>
          <div className="ct">
            <p>Meeting link:</p>
            <input type="text" name="meeting" value={meet_link} onChange={(e)=>setMeetlink(e.target.value)} placeholder="Paste meeting link here" />
          </div>
          <br></br>
          <div className="ct">
            <p>Additional note to Candidate:</p>
            <input type="text" name="Notes" value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Enter notes to candidates" />
          </div>
          <br></br>
            <button className='r_button' onClick={interview} style={{ textAlign: 'center', marginLeft: '0px'}}>Send</button>
      </div>
      <br></br>
    </div>
    </div>
  )
}

export default CandidateInterview