import React from 'react';

const  RecruiterHomePage =()  =>{
  return (
    <div className="container">
      <div className="card">
        <h1 style={{ fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '-330px', marginTop: '0px' }}>Welcome, Rec_test!</h1>
        <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '-485px', marginTop: '20px' }}>Recent updates:</h3>
        <ol>
          <li>
            Job postings: 4
          </li>
          <li>
            Profile matched: 2
          </li>
          <li>
            User Approval: 5
          </li>
        </ol>

        <h3 style={{ marginTop: '30px', fontFamily: 'Arial, Helvetica, sans-serif' }}>User Approval</h3>
        <table>
          <thead>
            <tr>
              <th>URM ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Approval</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="cand_details.html">37263</a></td>
              <td>Alex</td>
              <td>alex23@gmail.com</td>
              <td>
                <input type="button" className="approve" name="approve" value="Approve" />
                <input type="button" className="reject" name="reject" value="Reject" />
              </td>
            </tr>
            <tr>
              <td><a href="cand_details.html">43985</a></td>
              <td>John</td>
              <td>john76@gmail.com</td>
              <td>
                <input type="button" className="approve" name="approve" value="Approve" />
                <input type="button" className="reject" name="reject" value="Reject" />
              </td>
            </tr>
            <tr>
              <td><a href="cand_details.html">21906</a></td>
              <td>Stanley</td>
              <td>stanley98@gmail.com</td>
              <td>
                <input type="button" className="approve" name="approve" value="Approve" />
                <input type="button" className="reject" name="reject" value="Reject" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3 style={{ marginTop: '1px', fontFamily: 'Arial, Helvetica, sans-serif' }}>Application Status</h3>
        <table>
          <thead>
            <tr>
              <th>URM ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Application ID</th>
              <th>Institution</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10928</td>
              <td>Alex</td>
              <td>RA</td>
              <td><a href="app_status.html">78745</a></td>
              <td>UTA</td>
              <td style={{ color: 'orange' }}>In Process</td>
            </tr>
            <tr>
              <td>58392</td>
              <td>Morgan</td>
              <td>TA</td>
              <td><a href="app_status.html">99876</a></td>
              <td>UNT</td>
              <td style={{ color: 'red' }}>Rejected</td>
            </tr>
            <tr>
              <td>10765</td>
              <td>John</td>
              <td>SE</td>
              <td><a href="app_status.html">21657</a></td>
              <td>UTA</td>
              <td style={{ color: 'green' }}>Selected</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3 style={{ marginTop: '1px', fontFamily: 'Arial, Helvetica, sans-serif' }}>Number of Job Postings</h3>
        <table>
          <thead>
            <tr>
              <th>Institution</th>
              <th>Job Postings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="ins_job_post.html">UTA</a></td>
              <td>12</td>
            </tr>
            <tr>
              <td><a href="ins_job_post.html">UNT</a></td>
              <td>2</td>
            </tr>
            <tr>
              <td><a href="ins_job_post.html">UTD</a></td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3 style={{ marginTop: '1px', fontFamily: 'Arial, Helvetica, sans-serif' }}>New Profile Matches</h3>
        <table>
          <thead>
            <tr>
              <th>URM ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Institution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="prof_match.html">37263</a></td>
              <td>Alex</td>
              <td>RA</td>
              <td>UTA</td>
            </tr>
            <tr>
              <td><a href="prof_match.html">43985</a></td>
              <td>John</td>
              <td>TA</td>
              <td>UTD</td>
            </tr>
            <tr>
              <td><a href="prof_match.html">21906</a></td>
              <td>Stanley</td>
              <td>RA</td>
              <td>UNT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecruiterHomePage;
