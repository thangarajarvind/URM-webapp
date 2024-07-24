import React, { useState, useEffect } from "react";
 
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ApplicationStatusDetailsPage = () => {
    const {id} = useParams();
    const [data,setData] = useState([]);

    useEffect(() => {
        async function fetchMyAPI(){
          let result = await fetch("http://localhost:8000/api/applicationEdit/"+id);
          result = await result.json();
          setData(result)
      }
      fetchMyAPI()
    },[])
    console.warn(data)

    const[i_date,setIdate] = useState("")
    const[iid,setIid] = useState("")
    const[status,setStatus] = useState("")
    const[notes,setNotes] = useState("")

    async function applicationUpdate(){
        let item = {i_date,iid,status,notes}
        console.warn(item)

        let result = await fetch("http://localhost:8000/api/applicationUpdate/"+id,{
        method:'PUT',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
        })
        result = await result.json()
        console.warn("result",result)
        alert("Application Status Updated!")
        location.reload()
    }
    const getColor = (value) => {
      if(value === 'selected') return 'green';
      if(value === 'pending') return 'orange';
      if(value === 'rejected') return 'red';
    }


  return (
    <div className="main-content">
    <div className="top-bar"><h3>Applications</h3></div>
    <div className="recruiter-container">
      <div className="card">
        <h1 style={{ fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '20px' }}>Application Status</h1>

          <br />
          <div className="card" style={{ height: '300px' }}>
            <div className="title" style={{ textAlign: 'center', marginTop: '0px' }}>
            <h1>Application details</h1>
            </div>
            <div className="content">
                    <h4>Application ID:</h4>
                    <p>{id}</p>
            </div>
            <div className="content">
                    <h4>URM Id:</h4>
                    {data.map(item => (
                        <p>{item.uid}</p>
                    ))}       
            </div>
            <div className="content">
                    <h4>Job posting Id:</h4>
                    {data.map(item => (
                        <p>{item.jid}</p>
                    ))}
            </div>
            <div className="content">
                    <h4>Status:</h4>
                    {data.map(item => (
                        <p style = {{color: getColor(item.status)}}>{item.status}</p>
                    ))}
            </div>
            <div className="content">
                    <h4>Applied on:</h4>
                    {data.map(item => (
                        <p>{item.a_date}</p>
                    ))}
            </div>
        </div>

        <div className="card">
            <h1>Update Application Status</h1>
            <br></br>
            <div className="ct">
                <p>Date of Interview:</p>
                <input type="date" name="date" value={i_date} onChange={(e)=>setIdate(e.target.value)} />&emsp;
            </div>
            <br></br>
            <div className="ct">
                <p>Interview No:</p>
                <input type="text" name="interview" value={iid} onChange={(e)=>setIid(e.target.value)} placeholder="Enter Interview No" />
            </div>
            <br></br>
            <div className="ct">
            <p>Update Status:</p>
            <select name="status" value={status} onChange={(e)=>setStatus(e.target.value)} id="status">
                <option value="selected">Selected</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
            </select>
          </div>
          <br></br>
          <div className="ct">
            <p>Additional notes</p>
            <input type="text" name="Notes" value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Enter additional notes" />
          </div>

            <button onClick={applicationUpdate} className='r_button' style={{ textAlign: 'center', marginLeft: '0px' }}>Update</button>
            </div>

      </div>
      <br></br>
    </div>
    </div>
  )
}

export default ApplicationStatusDetailsPage