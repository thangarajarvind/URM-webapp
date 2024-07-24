import React from 'react'
import { Link } from "react-router-dom";

const DeiDashboardPage = () => {
    return (
        <div className="main-content">
            <div className="top-bar1">
                <h3><strong>Dashboard</strong></h3>
            </div>
            <div className="academia_container">

                <div className="card">
                    <h3>New Events</h3>
                    <div className="scrollbar1">
                        <table>
                            <tr>
                                <th>Event Date</th>
                                <th className="Event">Event Description</th>
                            </tr>
                            <tr>
                                <td>August 5</td>
                                <td className="Event">International Day of the World's Indigenous People</td>
                            </tr>
                            <tr>
                                <td>August 15</td>
                                <td className="Event">India Independence Day</td>
                            </tr>
                            <tr>
                                <td>August 17</td>
                                <td className="Event">Marcus Garvey Day</td>
                            </tr>
                            <tr>
                                <td>August 26</td>
                                <td className="Event">Women's Equality Day</td>
                            </tr>
                            <tr>
                                <td>August 31</td>
                                <td className="Event">Tisha B'Av</td>
                            </tr>
                        </table>
                        <button type="button" className='searchbtn'> edit</button>
                        <button type="button" className='searchbtn'>save</button>
                    </div>

                </div>

                <div className="card">
                    <h3> Job Openings - meet DEI
                       <Link to="/deiofficer/create">
                        <button type="button" className="searchbtn"> Set Preferences</button></Link> </h3>
                    <div className="scrollbar">
        
                        <Link to="/deiofficer/jobDescription">
                            <div className="card"><div className="container">
                                <b>Post Doctorate</b>
                                <p>Research: Artificial Intelligence</p>
                            </div>
                            </div>
                        </Link>
                        
                        <Link to="/deiofficer/jobDescription">
                            <div className="card"><div className="container">
                                <b>Professor</b>
                                <p>Subjects: Data Mining </p>
                            </div>
                            </div>
                        </Link>
                        
                        <Link to="/deiofficer/jobDescription">
                            <div className="card"><div className="container">
                                <b>Professor</b>
                                <p>Subjects: Data Mining</p>
                            </div>
                            </div></Link>
                        
                        <Link to="/deiofficer/jobDescription">
                            <div className="card"><div className="container">
                                <b>Professor</b>
                                <p>Subjects: Web Data Management</p>
                            </div>
                            </div></Link>
                    </div>
                </div>

                <div className="card">
                    <h3>New Initiatives</h3>

                    <div className="scrollbar1">
                        <div className="center">
                            <table>
                                <tr>
                                    <th>Sno</th>
                                    <th className="research">Initiative_Description</th>
                                
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className="research">Inclusion and Diversity Trainings</td>
                                    
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className="research">Employee Resource Group (ERG'S)</td>
                                    
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className="research">Recruitment and Hiring Practices</td>
                                    
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className="research">Policy Changes</td>
                                   
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td className="research">Employee Engagement and Retention</td>
                        
                                </tr>
                            </table>
                            <button type="button" className='searchbtn'> edit</button>
                            <button type="button" className='searchbtn'>save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DeiDashboardPage;