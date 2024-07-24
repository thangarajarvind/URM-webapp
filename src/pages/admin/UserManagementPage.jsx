import {NavLink} from 'react-router-dom';
import Chart from '../../assets/img/Untitled design.png';
import {Link} from 'react-router-dom';
import React, { useState,useEffect } from 'react';

const UMRPage = () => {
    const [data,setData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI(){
      let result = await fetch("http://localhost:8000/api/jobList");
      result = await result.json();
      setData(result)
  }
  fetchMyAPI()
  },[])
  async function confirm(){
    alert("New User added!")
    location.reload();
  }

  console.warn("result",data)
    return (
        <div className="container">
                <div className="top-bar">	
                    <h3 className="">Manage Users</h3>
                    {/* <div className="search">
                        <input type="text" placeholder="Search" />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div> */}
                </div>
        <div className="content">
            <br />
            <div className="content-2">
                <div className="mainblock">
                    <div className="title">
                        <h2 style={{ textAlign: 'center' }}>Job Postings</h2>
                    </div>
                    <table>
          <thead>
            <tr>
              <th>JID</th>
              <th>Institution</th>
              <th>Position</th>
              <th>Field/Subject</th>
            </tr>
          </thead>
          {
            data.map((item,myKey)=>
            <tbody key={myKey}>
            <tr>
              <td>{item.jid}</td>
              <td>{item.institution}</td>
              <td>{item.role}</td>
              <td>{item.department}</td>
            </tr>
            </tbody>
            )
          }
        </table>
                </div>
                <div className="bigblock">
                    <div className="title">
                        <h2>&nbsp;&nbsp;User Management</h2>
                    </div>
                    {/* <table>
                        <br />
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;Reports</h3>
                        <br />
                        <p  style={{padding: '1rem', paddingBottom: '0'}}>
                            &nbsp;&nbsp;
                            <input type="checkbox" id="dei-officers" name="report-type" value="DEI Officers" />
                            <label htmlFor="dei-officers">DEI Officers</label>
                            <br />
                            <br />
                            &nbsp;&nbsp;
                            <input type="checkbox" id="academia-members" name="report-type" value="Academia Members" />
                            <label htmlFor="academia-members">Academia Members</label>
                            <br />
                            <br />
                            &nbsp;&nbsp;
                            <input type="checkbox" id="urm-candidates" name="report-type" value="URM Candidates" />
                            <label htmlFor="urm-candidates">URM Candidates</label>
                            <br />
                            <br />
                            &nbsp;&nbsp;
                            <input type="checkbox" id="select-all" name="report-type" value="Select All" checked />
                            <label htmlFor="select-all">Select All</label>
                            <br />
                            <br />
                            <p style={{ textAlign: 'left' }}>
                                <button className="button"> Generate Report</button>
                            </p>
                        </p>
                    </table> */}
                    <hr />
                    <table>
                        <br />
                        <h3  style={{padding: '1rem', paddingBottom: '0'}}>User Management</h3>
                        <br />
                        <p  style={{padding: '1rem'}}>
                            {/* <br />
                            <NavLink to="/update-user" className="button">
                                - Update User
                            </NavLink>
                            <br />
                            <br />
                            <NavLink to="/delete-user" className="button">
                                - Delete User
                            </NavLink>
                            <br /> */}
                            <div className="search">
                                <input type="text" placeholder="Role"/>
                                {/* <button type="submit">
                                    &nbsp;&nbsp;&nbsp;<NavLink to="" className="button">
                                 Search
                            </NavLink>
                                </button> */}
                                <br />
                                <br />
                            
                                <input type="text" placeholder="E_Mail"/>
                                {/* <button type="submit">
                                    &nbsp;&nbsp;&nbsp;<NavLink to="" className="button">
                                 Search
                            </NavLink>
                                </button> */}
                                
                                <br />
                                <br />
                                <input type="text" placeholder="Password" />
                                <br />
                                <br />
                                <input type="text" placeholder="Name"/>
                                <br />
                                <br />
                                <input type="text" placeholder="Address"/>
                                <br />
                                <br />
                                <input type="text" placeholder="Phone"/>
                                <br />
                                <br />
                                <button type='submit' className='r_button'  onClick={confirm}  style={{ textAlign: 'center', marginLeft: '0px' }}>Create New User</button>
                                {/* <button type="submit">
                                    &nbsp;&nbsp;&nbsp;<NavLink to="" className="button">
                                 Search
                            </NavLink>
                                </button> */}
                            </div>
                        </p>
                    </table>
                </div>
            </div>
        </div>
        </div>
  )
}

export default UMRPage