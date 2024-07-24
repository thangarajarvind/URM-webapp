import React from 'react'
import { useState } from 'react';

const DeiProfilePage = () => {

    const[name,setName] = useState(sessionStorage.getItem("deiuserDetails") !== null ? JSON.parse(sessionStorage.getItem("deiuserDetails")).name : '')
    const[email,setEmail] = useState(sessionStorage.getItem("deiuserDetails") !== null ? JSON.parse(sessionStorage.getItem("deiuserDetails")).email : '')
    const[phone,setPhone] = useState(sessionStorage.getItem("deiuserDetails") !== null ? JSON.parse(sessionStorage.getItem("deiuserDetails")).phone : '')
    const[street,setStreet] = useState(sessionStorage.getItem("deiuserDetails") !== null ? JSON.parse(sessionStorage.getItem("deiuserDetails")).street : '')
    const[city,setCity] = useState(sessionStorage.getItem("deiuserDetails") !== null ? JSON.parse(sessionStorage.getItem("deiuserDetails")).city : '')
    const[country,setCountry] = useState(sessionStorage.getItem("deiuserDetails") !== null ? JSON.parse(sessionStorage.getItem("deiuserDetails")).country : '')
    const[zip,setZip] = useState(sessionStorage.getItem("deiuserDetails") !== null ? JSON.parse(sessionStorage.getItem("deiuserDetails")).zip : '')
    const[preferneces,setPreferences] = useState(sessionStorage.getItem("deiuserDetails") !== null ? JSON.parse(sessionStorage.getItem("deiuserDetails")).preferneces : '')
    const[about,setAbout] = useState("") 
    const[edit,setEdit] = useState(false)

    async function deiprofileupdate(){
        let item = {name,email,phone,street,city,country,zip,about,preferneces}
        const i = JSON.stringify(item)
        console.log(i)
        sessionStorage.setItem("deiuserDetails", i)
        setEdit(false)
        
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
                <div className='row' >
                     <label htmlFor='name'>Name </label> 
                     <input type="text"  name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} disabled={!edit} /> 
                     </div>
                     <div className='row'>
                     <label htmlFor='name'>Email</label> 
                    <input type="text"  name="Email" value={email} onChange={(e)=>setEmail(e.target.value)} disabled={!edit}  />
                    </div>
                    <p>Phone Number<input type="text" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} disabled={!edit} 
                            /></p>
                        <p>Street <input type="text" name="street" value={street} onChange={(e)=>setStreet(e.target.value)} disabled={!edit} 
                            /></p>
                        <p>City <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)} disabled={!edit}  /></p>
                        <p>Country <input type="text" name="country" value={country} onChange={(e)=>setCountry(e.target.value)}  disabled={!edit} /></p>
                        <p>Zipcode <input type="text" name="zipcode" value={zip} onChange={(e)=>setZip(e.target.value)} disabled={!edit}  /></p>
                        <p>Preferences <input type="text" name="preferences" value={preferneces} onChange={(e)=>setPreferences(e.target.value)} disabled={!edit}  /></p>
                        <p>About</p> <textarea rows="5" cols="40" name="about"  onChange={(e)=>setAbout(e.target.value)} > Participate in at least one professional development course or opportunity to enhance diversity
                           awareness and/or cultural competency during the year.Support diversifying the applicant pool for faculty/staff/student positions.  
                        </textarea>
                    
                        <button type="button" className='searchbtn'  onClick={() => setEdit(true)} style={{ marginLeft:'0px' }}>edit</button>
                        <button type="button" className='searchbtn'  onClick={deiprofileupdate} style={{ marginLeft:'0px' }}>save</button>
                </form>
            </div>
        </div>
    )
}

export default DeiProfilePage