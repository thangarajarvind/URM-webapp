import React from 'react'
import './css/Home_Content_CSS.css'
import './css/profile_content_CSS.css'
import './css/applications_content_CSS.css'

const CandidateSettingsPage = () => {
  return (
    <div id="content">
          <div className="tile">
          <h3>Account Details</h3>
          <div className="">
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="New Email" name="email" id="email" required />
          </div>
            <div className="">
                <label htmlFor="con_email"><b>Confirm Email</b></label>
                <input type="text" placeholder="Confirm Email" name="con_email" id="con_email" required />
            </div>
            <button type="button" className="email">Update Email</button>
          </div>
          <div className="tile">
            <h3>Change Password</h3>
            <div className="">
                <label htmlFor="pass"><b>Password</b></label>
                <input type="password" placeholder="New Password" name="pass" id="pass" required />
            </div>
            <div className="">
                <label htmlFor="con_pass"><b>Confirm Password</b></label>
                <input type="password" placeholder="Confirm Password" name="con_pass" id="con_pass" required />
            </div>
            <button type="button" className="password">Update Password</button>
          </div>
        </div>
      )
}

export default CandidateSettingsPage