import React from 'react'

const ServicesPage = () => {
  return (
    <div> <div className="div_cols_container">
    <div className="div_col">
        <h3>Dont worry we have you covered. We offer a range of services across different price points</h3>
    </div>
    <div className="service div_rows_container">
        <div className="service div_row">
            <p><b>Plan 1</b></p>
            <p className="list_header">Provide access to </p>
            <ul>
                <li>URM Candidates</li>
                <li>Cost $1000</li>
            </ul>
        </div>
        <div className="service div_row">
            <p><b>Plan 2</b></p>
            <p className="list_header">Provide access to</p>
            <ul> 
                <li>URM Candidates</li>
                <li>3 Recruiters</li>
                <li>1 DEI Officer</li>
                <li>Cost $2000</li>
            </ul>
        </div>
        <div className="service div_row">
            <p><b>Plan 3</b></p>
            <p className="list_header">Provide access to </p>
            <ul> 
                <li>URM Candidates</li>
                <li>10 Recruiters</li>
                <li>3 DEI Officer</li>
                <li>Cost $4000</li>
            </ul>
        </div>
        <div className="service div_row" id="plan4">
            <p><b>Plan 4</b></p>
            <p className="list_header"> Provide access to </p>
            <ul> 
                <li>URM Candidates</li>
                <li>Custom Requirements</li>
                <li><a href="contact.html">Contact Us</a> for more details</li>
            </ul>
        </div>
    </div>
    
</div></div>
  )
}

export default ServicesPage;