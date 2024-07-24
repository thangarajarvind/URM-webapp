import React from 'react'

const DeiMatching = () => {
    return (
        <div className="main-content">
            <div className="top-bar1">
                <h3>Successful Matchings</h3>
            </div>
            <div className="academia_container">
                <div className="card">
                    <h3>Candidates meet the Job requirements</h3>
                    <div className="scrollbar">
                        <table>
                            <tr><th>Jobs</th><th>Courses</th><th>Candidates</th></tr>
                            <tr>
                                <td>Professor</td>
                                <td> Data Mining</td>
                                <td> Cand2</td>
                            </tr> <tr>
                                <td>Professor</td>
                                <td> Data Mining</td>
                                <td> Cand3</td>
                            </tr><tr>
                                <td>Research Asistant</td>
                                <td>   Data Mining</td>
                                <td> Cand4</td>
                            </tr><tr>
                                <td>Professor</td>
                                <td> Data Mining</td>
                                <td> Cand1</td>
                            </tr><tr>
                                <td>Research Asistant</td>
                                <td>   Data Mining</td>
                                <td> Cand2</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="card">
                    <h3>jobs that match with DEI </h3>
                    <div className="scrollbar">
                    <table>
                            <tr><th>Jobs</th><th>Courses</th></tr>
                            <tr>
                                <td>Research Assistant</td>
                                <td> Data Mining</td>
                            </tr> <tr>
                                <td>Professor</td>
                                <td> Data Mining</td>
                            </tr><tr>
                                <td>Research Asistant</td>
                                <td>   Data Mining</td>
                            </tr>
                                </table>
                                </div>
                </div>
            </div>
        </div>
    );
}

export default DeiMatching;