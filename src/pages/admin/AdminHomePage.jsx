import profile_3135715 from '../../assets/img/profile_3135715.png';
import profile_3135789 from '../../assets/img/profile_3135789.png'
import man_4140048 from '../../assets/img/man_4140048.png';
import React from 'react';
import {Link} from 'react-router-dom';
import { AdminDashTableComponent } from '../../components';

const AdminHomePage = () => {
  return (
        <div className="container">
            <div className="top-bar">	
                <h3 className="">Dashboard</h3>
                {/* <div className="search">
                    <input type="text" placeholder="Search" />
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div> */}
            </div>
    {/* <!-- This code block is for the four small boxes that display the User numbers. --> */}
            <div className="content">
                <div className="cards">
                    <div className="card">
                        <div className="box">
                            <h1>10</h1>
                            <h3>Total Users</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <h1>1</h1>
                            <h3>Users Status</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <h4>Academia Members - 3</h4>
                            <h4>Candidates - 12</h4>
                            <h4>DEI Offciers - 5</h4>
                            <h3>User Strength</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <h1>3</h1>
                            <h3>Bugs/Errors Reported</h3>
                        </div>
                    </div>
                </div>
    {/* <!-- The next code block is for the Registration Requests & feedback blocks in a tabular form. --> */}
                <div className="content-2">
                    <div className="mainblock">
                        <div className="title">
                            <h2>Registration Requests</h2>
                        </div>
                        <AdminDashTableComponent />
                    </div>
                    
                    </div>
                </div>
            </div>
    
  )
}

export default AdminHomePage