import React from 'react'

const AcademiaCandidateStatusPage = () => {
  return (
    <div className="main-content">
    <div className="top-bar1"><h3>Applied Candidates are 15 and their statuses</h3></div>
    <div className="container1">
    <div className="scrollbar">
        <table>
            <thead>
                <tr>
                    <th className="candidate">Candidates</th>
                    <th className="candidate">Course</th>
                    <th className="candidate">Passed out Year</th>
                    <th className="candidate">Applied Position</th>
                    <th className="candidate">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="candidate">Cand1</td>
                    <td className="candidate">Data Mining</td>
                    <td className="candidate">2020</td>
                    <td className="candidate">Professor</td>
                    <td className="candidate">Received</td>
                </tr>
                <tr>
                    <td className="candidate">Cand2</td>
                    <td className="candidate">Artificial Intelligence</td>
                    <td className="candidate">2020</td>
                    <td className="candidate">Professor</td>
                    <td className="candidate">In Progress</td>
                </tr>
                <tr>
                    <td className="candidate">Cand3</td>
                    <td className="candidate">Data Mining</td>
                    <td className="candidate">2020</td>
                    <td className="candidate">Professor</td>
                    <td className="candidate">In Progress</td>
                </tr>
                <tr>
                    <td className="candidate">Cand4</td>
                    <td className="candidate">Web Data Management</td>
                    <td className="candidate">2020</td>
                    <td className="candidate">Professor</td>
                    <td className="candidate">Selected</td>
                </tr>
                <tr>
                    <td className="candidate">Cand5</td>
                    <td className="candidate">Web Data Management</td>
                    <td className="candidate">2019</td>
                    <td className="candidate">Professor</td>
                    <td className="candidate">Reviewing</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>
  )
}

export default AcademiaCandidateStatusPage;