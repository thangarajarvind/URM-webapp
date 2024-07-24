import React from 'react'
import { useState } from 'react';

const DeiProfilePage = () => {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")
    const[street,setStreet] = useState("")
    const[city,setCity] = useState("")
    const[country,setCountry] = useState("")
    const[zip,setZip] = useState("")
    const[preference,setPreference] = useState("")
    const[about,setAbout] = useState("")

    async function deiprofileupdate(){
        let item = {name,email,phone,street,city,country,zip,preference,about}
        console.warn(item)
        
    let result = await fetch("http://localhost:8000/api/deiprofileupdate",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
          "Content-Type":'application/json',
          "Accept":'application/json'
        }
      })
      result = await result.json()
      console.warn("result",result)
    }







    return (
        <div className="main-content">
            <div className="top-bar1">
                <h3><strong>Profile</strong></h3>
            </div>
            <div className="container1">
                <form method="post">
                     <p>DeiOfficer_Name:
                     <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder=" DEI" /></p>
                    <p>Email Address
                    <input type="text" name="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder=" abc@mavs.uta.edu" /></p>
                    <p>Phone Number<input type="text"  name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}
                            placeholder=" 123-456-6789" /></p>
                       <p> Address </p>
                        <p>Street <input type="text" name="street" value={street} onChange={(e)=>setStreet(e.target.value)}
                            placeholder=" 123 N Collins st" /></p>
                        <p>City <input type="text"  name="city" value={city} onChange={(e)=>setCity(e.target.value)} placeholder=" Arlington" /></p>
                        <p>Country <input type="text" name="country" value={country} onChange={(e)=>setCountry(e.target.value)}  placeholder=" Texas" /></p>
                        <p>Zipcode <input type="text"  name="zipcode"  value={zip} onChange={(e)=>setZip(e.target.value)} placeholder="76013" /></p>
                        <p>Preferences <input type="text" name="preference"  value={preference} onChange={(e)=>setPreference(e.target.value)} placeholder="Data Science" /></p>
                        <p>About</p> <textarea rows="5" cols="40" name="about" value={about} onChange={(e)=>setAbout(e.target.value)} > Participate in at least one professional development course or opportunity to enhance diversity
                           awareness and/or cultural competency during the year.Support diversifying the applicant pool for faculty/staff/student positions.  
                        </textarea>
                    
                        <button type="button" className='searchbtn'  onClick={deiprofileupdate} style={{ marginLeft:'0px' }}>edit</button>
                        <button type="button" className='searchbtn'  onClick={deiprofileupdate} style={{ marginLeft:'0px' }}>save</button>
                </form>
            </div>
        </div>
    )
}

export default DeiProfilePage