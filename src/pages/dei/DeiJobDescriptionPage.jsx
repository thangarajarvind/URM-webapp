import React from 'react'

const DeiJobDescriptionPage = () => {
  return (
    <div className="main-content">
  <div className="top-bar1"><h3>Applicants that meet DEI_Criteria</h3></div>
  <div className="container12">
  <div className='column'>

      
        
      <p><h3>Number of Applicants: 30</h3></p>
 <div className="scrollbar4">
        <table>
            <thead>
                <tr>
                    <th className="candidate">Candidates</th>
                    <th className="candidate">Course</th>
                    <th className="candidate">Passed out Year</th>
                    <th className="candidate">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="candidate">Cand1</td>
                    <td className="candidate">Data Mining</td>
                    <td className="candidate">2020</td>
                    <td className="candidate">Received</td>
                </tr>
                <tr>
                    <td className="candidate">Cand2</td>
                    <td className="candidate">Artificial Intelligence</td>
                    <td className="candidate">2020</td>
                    <td className="candidate">In Progress</td>
                </tr>
                <tr>
                    <td className="candidate">Cand3</td>
                    <td className="candidate">Data Mining</td>
                    <td className="candidate">2020</td>
                    <td className="candidate">In Progress</td>
                </tr>
                <tr>
                    <td className="candidate">Cand4</td>
                    <td className="candidate">Web Data Management</td>
                    <td className="candidate">2020</td>
                    <td className="candidate">Selected</td>
                </tr>
                <tr>
                    <td className="candidate">Cand5</td>
                    <td className="candidate">Web Data Management</td>
                    <td className="candidate">2019</td>
                    <td className="candidate">Reviewing</td>
                </tr>
            </tbody>
        </table>
    </div>
      </div>
      </div>
      </div>
  )
}

export default DeiJobDescriptionPage;