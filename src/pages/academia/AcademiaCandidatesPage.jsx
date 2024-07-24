import React from 'react'
import { useState } from 'react';
import './CSS/acadeia.css'
import { CANDIDATES_LIST } from './Contsants/academia';


const AcademiaCandidatesPage = () => {

    const[name,setName] = useState("")
    const [candidates, setCandidates] = useState(CANDIDATES_LIST);
    const [savedCandidates,setSavedCandidates] = useState([]);
    const [show,setShow] = useState(false)
    const [selectedCandidate,setSelectedCandidate] = useState('')
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    
    async function profileCand(){
        console.log(name)
        let res = candidates.filter((i) => i.name === name)
        console.log(res)
        res.length > 0  ? setCandidates(res) : setCandidates(CANDIDATES_LIST)
        

        
    // let result = await fetch("http://localhost:8000/api/profileCand",{
    //     method:'POST',
    //     body:JSON.stringify(item),
    //     headers:{
    //       "Content-Type":'application/json',
    //       "Accept":'application/json'
    //     }
    //   })
    //   result = await result.json()
    //   console.warn("result",result)
    }

    const searchHandle = (ev) => {
        ev.preventDefault()
        setName(ev.target.value)
       
    }

    const saveHandle = (ev,item) => {
        console.log(ev)
        console.log(item)
        let res = savedCandidates.concat(item)
       setSavedCandidates(res)
    }

    const removeHandle = (ev,item) => {
        let res = savedCandidates.filter(i => i !== item)
        setSavedCandidates(res)
    }







  return ( 
       <div className="main-content">
                <div className="filter_card1">
                    <div className="filter_container">
                        <div className="filter">
                            Name:<input type="text" value={name} onChange={searchHandle}   placeholder="name" />
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
                        <button type="button" className="searchbtn" onClick={profileCand} style={{ float: 'right' }}>Search</button>
                    </div>
                </div>
                
  <div className="candidate_container">

  <div className="card">
                <h3 style={{ textAlign: 'center' }}> Candidates</h3>
                <div class="scrollbar"> 
                        <table>
                        {candidates.map((item) => (  <tr>
                            <div class="card1">
                                    <p><strong>{item.name}</strong></p>
                                    <p>{item.course}
                                    <button type="button" className="searchbtn" onClick={(ev) => {saveHandle(ev,item)}}> Save</button>
                                    <button type="button" className="searchbtn" onClick={(ev) => {setShow(true);setSelectedCandidate(item);}}> View</button></p>
                                    </div>
                            </tr>)) }
                          
                          
                        </table>
                </div>
                </div>
                
                <div className="card">
                <h3 style={{ textAlign: 'center' }}>Saved Candidates</h3>
                <div class="scrollbar">
                        <table>
                            {savedCandidates.map((item) => (
                                   <tr>
                                   <div class="card1">
   
                                       <strong>{item.name}</strong>
                                       <p>{item.course}
                                       <button type="button" className="searchbtn" onClick={(ev) => {removeHandle(ev,item)}}> remove</button>
                                       <button type="button" className="searchbtn" onClick={(ev) => {setShow(true);setSelectedCandidate(item);}}> View</button></p>
                                   </div>
                               </tr>
                            ))}
                         
                 
                        </table>
                    </div>
                    </div>
                    </div>
                    <div id="myModal" class={showHideClassName}>
  <div class="modal-main" style={{padding:'2%'}}>
    <span class="close" style={{float:"right"}} onClick={() => setShow(false)}>&times;</span>
    <h3 style={{alignContent:'center'}}>Candidate Details</h3>
    <p>Candidate Name : {selectedCandidate.name}</p>
    <p>Course : {selectedCandidate.course}</p>
  </div>

</div>
                    </div>
  )
}

export default AcademiaCandidatesPage