import React from 'react'
import { useState } from 'react';
import './CSS/acadeia.css'



const AcademiaProfilePage = () => {
    
    
    const[name,setName] = useState(sessionStorage.getItem("userDetails") !== null ? JSON.parse(sessionStorage.getItem("userDetails")).name : '')
    const[email,setEmail] = useState(sessionStorage.getItem("userDetails") !== null ? JSON.parse(sessionStorage.getItem("userDetails")).email : '')
    const[phone,setPhone] = useState(sessionStorage.getItem("userDetails") !== null ? JSON.parse(sessionStorage.getItem("userDetails")).phone : '')
    const[street,setStreet] = useState(sessionStorage.getItem("userDetails") !== null ? JSON.parse(sessionStorage.getItem("userDetails")).street : '')
    const[city,setCity] = useState(sessionStorage.getItem("userDetails") !== null ? JSON.parse(sessionStorage.getItem("userDetails")).city : '')
    const[country,setCountry] = useState(sessionStorage.getItem("userDetails") !== null ? JSON.parse(sessionStorage.getItem("userDetails")).country : '')
    const[zip,setZip] = useState(sessionStorage.getItem("userDetails") !== null ? JSON.parse(sessionStorage.getItem("userDetails")).zip : '')
    const[about,setAbout] = useState("") 
    const[edit,setEdit] = useState(false)
    

    async function profileUpdate(){
        let item = {name,email,phone,street,city,country,zip,about}
        const i = JSON.stringify(item)
        console.log(i)
        sessionStorage.setItem("userDetails", i)
        setEdit(false)

        
    let result = await fetch("http://localhost:8000/api/profileUpdate",{
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
                        <p>About</p> <textarea rows="5" cols="100"name="Email" onChange={(e)=>setAbout(e.target.value)} disabled={!edit} > The University of Texas at Arlington is a public research university in Arlington, Texas. The university was founded in 1895 and was in the Texas A&M University System for several decades until joining the University of Texas System in 1965.
                            The University of Texas at Arlington is a growing research powerhouse committed to life-enhancing discovery, innovative instruction, and caring community engagement. An educational leader in the heart of the thriving North Texas region, UT Arlington nurtures minds within an environment that values excellence, ingenuity, and diversity.

                            Whether providing an unparalleled education for its over 56,000 students or addressing important societal challenges, the University is in the business of improving the quality of life in Texas and beyond. Of UT Arlington's 200,000 alumni, about 65 percent live in North Texas and contribute to the University's annual economic impact of $12.8 billion in the region and $13.6 billion in the state.
                        </textarea>
                    
                    <button type="button" className='searchbtn'  onClick={() => setEdit(true)} style={{ marginLeft:'0px' }}>edit</button>
                    <button type="button" className='searchbtn'  onClick={profileUpdate} style={{ marginLeft:'0px' }}>save</button>
                </form>
            </div>
        </div>
    )
}

export default AcademiaProfilePage