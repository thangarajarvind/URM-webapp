import React from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CandidateDetailsPage = () => {
  const {id} = useParams();
  const [data,setData] = useState([]);

  useEffect(() => {
        async function fetchMyAPI(){
          let result = await fetch("http://localhost:8000/api/getCandidate/"+id);
          result = await result.json();
          setData(result)
      }
      fetchMyAPI()
    },[])
    console.warn(data)
  return (
    <div className="main-content">
    <div className="top-bar"><h3>Candidates</h3></div>
    <div className="container">
      <form action="/recruiter/interview">
        <div className="card">
          <div className="title" style={{ textAlign: 'center' }}>
            <h1>Candidate details</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Attributes</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                {data.map(item => (
                  <td>{item.fname}</td>
                ))}
              </tr>
              <tr>
                <td>URM ID</td>
                {data.map(item => (
                  <td>{item.id}</td>
                ))}
              </tr>
              <tr>
                <td>Qualification</td>
                {data.map(item => (
                  <td>{item.qualification}</td>
                ))}
              </tr>
              <tr>
                <td>Address</td>
                {data.map(item => (
                  <td>{item.address}</td>
                ))}
              </tr>
              <tr>
                <td>Location</td>
                {data.map(item => (
                  <td>{item.nationality}</td>
                ))}
              </tr>
              <tr>
                <td>Ethnicicty</td>
                {data.map(item => (
                  <td>{item.ethnicity}</td>
                ))}
              </tr>
              <tr>
                <td>Contact</td>
                {data.map(item => (
                  <td>{item.phone}</td>
                ))}
              </tr>
              <tr>
                <td>Email</td>
                {data.map(item => (
                  <td>{item.email}</td>
                ))}
              </tr>
            </tbody>
          </table>
            <button className='r_button'  style={{ textAlign: 'center', marginLeft: '0px' }}>Interview candidate</button>
        </div>
      </form>
    </div>
    </div>

  )
}

export default CandidateDetailsPage