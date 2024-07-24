import React from 'react'
import { useState } from 'react';

const DeiCandidatesPage = () => {

    const[name,setName] = useState("")
    const[typeofcontract,setTypeofcontract] = useState("")
    const[courses,setCourses] = useState("")


    async function deicandidatesearch(){
        let item = {name,typeofcontract,courses}
        console.warn(item)
        
    let result = await fetch("http://localhost:8000/api/deicandidatesearch",{
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
                <div className="filter_card1">
                    <div className="filter_container">
                        <div className="filter">
                            Name:<input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="filter">
                            <label htmlFor="filter3">Courses: </label>
                            <select id="filter3">
                                <option value="">All</option>
                                <option value="optionA">Data Mining</option>
                                <option value="optionB">Web Data Management</option>
                                <option value="optionC">Artificial Intelligence</option>
                            </select>
                        </div>
                    </div>

                    <div className="filter_container">
                        Type Of Contract:
                        <div id="multiSelect">
                            <input type="checkbox" id="option1" value="Part-time" />
                            <label htmlFor="option1">Part-time</label>

                            <input type="checkbox" id="option2" value="Full-time" />
                            <label htmlFor="option2">Full-time</label>

                            <input type="checkbox" id="option3" value="Contract" />
                            <label htmlFor="option3">Contract</label>
                        </div>
                        <button type="button" className="searchbtn" style={{ float: 'right' }}>Search</button>
                    </div>
                </div>
                
  <div className="candidate_container">

  <div className="card">
                <h3 style={{ textAlign: 'center' }}> Candidates</h3>
                <div class="scrollbar"> 
                        <table>
                            <tr>
                                    <p><strong>Cand1</strong></p>
                                    <p>Computer Science
                                    <button type="button" className="searchbtn"> Save</button>
                                    <button type="button" className="searchbtn"> View</button></p>
                            </tr>
                            <tr>
                                <div class="card1">

                                    <p><strong> Cand2</strong></p>
                                    <p>Data Science
                                    <button type="button" className="searchbtn"> Save</button>
                                    <button type="button" className="searchbtn"> View</button></p>
                                </div>
                            </tr>
                            <tr>
                                <div class="card1">

                                    <strong> Cand3</strong>
                                    <p>Information Science
                                    <button type="button" className="searchbtn"> Save</button>
                                    <button type="button" className="searchbtn"> View</button></p>
                                </div>
                            </tr>
                            <tr>
                                <div class="card1">

                                    <strong> Cand4</strong>
                                    <p>Data Science
                                    <button type="button" className="searchbtn"> Save</button>
                                    <button type="button" className="searchbtn"> View</button></p>
                                </div>
                            </tr>
                            <tr>
                                <div class="card1">

                                    <strong> Cand5</strong>
                                    <p>Computer Science
                                    <button type="button" className="searchbtn"> Save</button>
                                    <button type="button" className="searchbtn"> View</button></p>
                                </div>
                            </tr>
                        </table>
                </div>
                </div>
                
                <div className="card">
                <h3 style={{ textAlign: 'center' }}>Saved Candidates</h3>
                <div class="scrollbar">
                        <table>
                            <tr>
                                <div class="card1">

                                    <strong>Cand3</strong>
                                    <p>Information Science
                                    2020
                                    <button type="button" className="searchbtn"> remove</button>
                                    <button type="button" className="searchbtn"> View</button></p>
                                </div>
                            </tr>
                            <tr>
                                <div class="card1">

                                    <strong>Cand4</strong>
                                    <p>Data Science
                                    2020
                                    <button type="button" className="searchbtn"> remove</button>
                                    <button type="button" className="searchbtn"> View</button></p>
                                </div>
                            </tr>
                            <tr>
                                <div class="card1">

                                    <strong>Cand5</strong>
                                    <p>Computer Science
                                    2019
                                    <button type="button" className="searchbtn"> remove</button>
                                    <button type="button" className="searchbtn"> View</button></p>
                                </div>
                            </tr>
                        </table>
                    </div>
                    </div>
                    </div>
                    </div>
  )
}

export default DeiCandidatesPage ;