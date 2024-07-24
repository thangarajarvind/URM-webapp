import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {} from '../../components/FormInputComponent';
import './recruiter.css';

const SearchCandidate = () => {
  const[name,setName] = useState("")
  return (
    <div className="main-content">
    <div className="top-bar"><h3>Candidates</h3></div>
    <br></br>
    <div className="recruiter-container">
    <div className="card">
      <form>
        <div className="title">
          <h1>Search for Candidates</h1>
        </div>
        <div className="content">
          <p>Candidate name:</p>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} style={{ textAlign: 'center'}} placeholder="Enter the name" required />
        </div>
        <Link to={`/recruiter/cand_details/${name}`}>
        <button className="r_button" style={{ textAlign: 'center', marginLeft: '0px' }}>Search</button>
        </Link>
      </form>
    </div>
  </div>
  </div>
  )
}

export default SearchCandidate