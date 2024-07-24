import React from 'react'
import { Link } from "react-router-dom";

const AcademiaDashboardPage = () => {
    return (
        <div className="main-content">
            <div className="top-bar1">
                <h3><strong>Dashboard</strong></h3>
            </div>
            <div className="academia_container">

                <div className="card">
                    <h3>Research Focus Area</h3>
                    <div className="scrollbar1">
                        <table>
                            <tr>
                                <th>Researchers</th>
                                <th className="research">Research</th>
                            </tr>
                            <tr>
                                <td>Researcher1</td>
                                <td className="research">Data Mining Research</td>
                            </tr>
                            <tr>
                                <td>Researcher2</td>
                                <td className="research">Artificial Intelligence Research</td>
                            </tr>
                            <tr>
                                <td>Researcher3</td>
                                <td className="research">Data Mining Research</td>
                            </tr>
                            <tr>
                                <td>Researcher4</td>
                                <td className="research">Web Data Management Research</td>
                            </tr>
                            <tr>
                                <td>Researcher5</td>
                                <td className="research">Web Data Management Research</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="card">
                    <h3> Job Openings 15 are open
                       <Link to="/academia/create">
                        <button type="button" className="searchbtn"> Create</button></Link> </h3>
                    <div className="scrollbar">
                        <button type="button" className="searchbtn"> Delete</button>
                        <Link to="/academia/jobDescription">
                            <div className="card"><div className="container">
                                <b>Post Doctorate</b>
                                <p>Research: Artificial Intelligence</p>
                            </div>
                            </div>
                        </Link>
                        <button type="button" className="searchbtn"> Delete</button>
                        <Link to="/academia/jobDescription">
                            <div className="card"><div className="container">
                                <b>Professor</b>
                                <p>Subjects: Data Mining </p>
                            </div>
                            </div>
                        </Link>
                        <button type="button" className="searchbtn"> Delete</button>
                        <Link to="/academia/jobDescription">
                            <div className="card"><div className="container">
                                <b>Professor</b>
                                <p>Subjects: Data Mining</p>
                            </div>
                            </div></Link>
                        <button type="button" className="searchbtn"> Delete</button>
                        <Link to="/academia/jobDescription">
                            <div className="card"><div className="container">
                                <b>Professor</b>
                                <p>Subjects: Web Data Management</p>
                            </div>
                            </div></Link>
                    </div>
                </div>

                <div className="card">
                    <h3>Faculty</h3>

                    <div className="scrollbar1">
                        <div className="center">
                            <table>
                                <tr>
                                    <th>Professor</th>
                                    <th className="research">Course</th>
                                    <th className="research">Section</th>
                                </tr>
                                <tr>
                                    <td>Prof1</td>
                                    <td className="research">Data Mining</td>
                                    <td className="research">DM-001</td>
                                </tr>
                                <tr>
                                    <td>Prof2</td>
                                    <td className="research">Artificial Intelligence</td>
                                    <td className="research">AI-001</td>
                                </tr>
                                <tr>
                                    <td>Prof3</td>
                                    <td className="research">Data Mining</td>
                                    <td className="research">DM-002</td>
                                </tr>
                                <tr>
                                    <td>Prof4</td>
                                    <td className="research">Web Data Management</td>
                                    <td className="research">WDM-001</td>
                                </tr>
                                <tr>
                                    <td>Prof5</td>
                                    <td className="research">Web Data Management</td>
                                    <td className="research">WDM-002</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AcademiaDashboardPage;