import React from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CandidateSearchResultsPage = () => {


  return (
    <div className="main-content">
    <div className="top-bar"><h3>Candidates</h3></div>
    <div className="recruiter-container">
      <div className="card">
        <h2 style={{ marginTop: '20px', fontFamily: 'Arial, Helvetica, sans-serif' }}>Search Results</h2>
        <table>
          <thead>
            <tr>
              <th>URM ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Ethnicity</th>
              <th>Qualification</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td><Link to="/recruiter/cand_details">09845</Link></td>
            <td>Alex</td>
              <td>Korea</td>
              <td>Asian</td>
              <td>B.Tech</td>
              <td>6781230987</td>
            </tr>
            <tr>
            <td><Link to="/recruiter/cand_details">78654</Link></td>
            <td>George</td>
              <td>Korea</td>
              <td>Asian</td>
              <td>B.Tech</td>
              <td>6724132378</td>
            </tr>
            <tr>
            <td><Link to="/recruiter/cand_details">23645</Link></td>
            <td>Andrea</td>
              <td>Korea</td>
              <td>Asian</td>
              <td>B.Tech</td>
              <td>6523412564</td>
            </tr>
            <tr>
            <td><Link to="/recruiter/cand_details">90876</Link></td>
            <td>John</td>
              <td>Korea</td>
              <td>Asian</td>
              <td>B.Tech</td>
              <td>6243671098</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default CandidateSearchResultsPage