import React from 'react'
import { useState } from 'react';



const AcademiaProfilePage = () => {
    
    
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")
    const[street,setStreet] = useState("")
    const[city,setCity] = useState("")
    const[country,setCountry] = useState("")
    const[zip,setZip] = useState("")
    const[about,setAbout] = useState("") 
    

    async function profileUpdate(){
        let item = {name,email,phone,street,city,country,zip,about}
        console.warn(item)

        
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
                     <p>Name
                     <input type="text"  name="name" value={name} onChange={(e)=>setName(e.target.value)}   placeholder=" University of Texas at Arlington" /></p>
                    <p>Email Address
                    <input type="text"  name="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder=" abc@mavs.uta.edu" /></p>
                    <p>Phone Number<input type="text" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}
                            placeholder=" 123-456-6789" /></p>
                       <p> Address: </p>
                        <p>Street <input type="text" name="street" value={street} onChange={(e)=>setStreet(e.target.value)}
                            placeholder=" 123 N Collins st" /></p>
                        <p>City <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)} placeholder=" Arlington" /></p>
                        <p>Country <input type="text" name="country" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder=" Texas" /></p>
                        <p>Zipcode <input type="text" name="zipcode" value={zip} onChange={(e)=>setZip(e.target.value)} placeholder="76013" /></p>
                        <p>About</p> <textarea rows="5" cols="100"name="Email" value={about} onChange={(e)=>setAbout(e.target.value)} > The University of Texas at Arlington is a public research university in Arlington, Texas. The university was founded in 1895 and was in the Texas A&M University System for several decades until joining the University of Texas System in 1965.
                            The University of Texas at Arlington is a growing research powerhouse committed to life-enhancing discovery, innovative instruction, and caring community engagement. An educational leader in the heart of the thriving North Texas region, UT Arlington nurtures minds within an environment that values excellence, ingenuity, and diversity.

                            Whether providing an unparalleled education for its over 56,000 students or addressing important societal challenges, the University is in the business of improving the quality of life in Texas and beyond. Of UT Arlington's 200,000 alumni, about 65 percent live in North Texas and contribute to the University's annual economic impact of $12.8 billion in the region and $13.6 billion in the state.
                        </textarea>
                    
                    <button type="button" className='searchbtn'  onClick={profileUpdate} style={{ marginLeft:'0px' }}>edit</button>
                    <button type="button" className='searchbtn'  onClick={profileUpdate} style={{ marginLeft:'0px' }}>save</button>
                </form>
            </div>
        </div>
    )
}

export default AcademiaProfilePage