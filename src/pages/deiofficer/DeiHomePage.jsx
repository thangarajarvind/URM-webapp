import React, { useState } from 'react'
import { Link } from "react-router-dom";

const DeiDashboardPage = () => {
    const [jobs,setJobs] = useState(sessionStorage.getItem("DEI Job Openings") === null ? [] :JSON.parse(sessionStorage.getItem("DEI Job Openings")));
    const [deiEvents,setDeiEvents] = useState(sessionStorage.getItem("deiEvents") === null ? [] :JSON.parse(sessionStorage.getItem("deiEvents")));
    const [deiInitiatives,setDeiInitiatives] = useState(sessionStorage.getItem("deiInitiatives") === null ? [] :JSON.parse(sessionStorage.getItem("deiInitiatives")));
    const [addInit,setAddInIt] = useState(false)
    const [initSi, setInitSi] = useState('')
    const [initName, setInitName] = useState('')

    const [addEvent,setAddEvent] = useState(false)
    const [eventDate, setEventDate] = useState('')
    const [eventName, setEventName] = useState('')

    
    const deleteHandle = (ev) => {
        console.log(ev.target.name) 
        const res = jobs.filter((i) => i.role !== ev.target.name)
        sessionStorage.setItem("DEI Job Openings", JSON.stringify(res))
        setJobs(res)

    }

    const saveEventHandle = () => {
        setAddEvent(false)
        let data = {eventDate,eventName}
        const events = sessionStorage.getItem("deiEvents") === null ? [] :JSON.parse(sessionStorage.getItem("deiEvents"));
        setDeiEvents(events.concat(data))
        const events1 = JSON.stringify(events.concat(data))
        sessionStorage.setItem("deiEvents",events1)
        console.log(data)
    }

    const saveInitHandle = () => {
        setAddInIt(false)
        let data = {initSi,initName}
        const inits = sessionStorage.getItem("deiInitiatives") === null ? [] :JSON.parse(sessionStorage.getItem("deiInitiatives"))
        setDeiInitiatives(inits.concat(data))
        const inits1 = JSON.stringify(inits.concat(data))
        sessionStorage.setItem("deiInitiatives",inits1)
        console.log(data)
    }
    return (
        <div className="main-content">
            <div className="top-bar1">
                <h3><strong>Dashboard</strong></h3>
            </div>
            <div className="academia_container">

                <div className="card">
                    <h3>New Events</h3>
                    <div className="scrollbar1">
                        <table>
                            <tr>
                                <th>Event Date</th>
                                <th className="Event">Event Description</th>
                            </tr>
                            <tr>
                                <td>August 5</td>
                                <td className="Event">International Day of the World's Indigenous People</td>
                            </tr>
                            <tr>
                                <td>August 15</td>
                                <td className="Event">India Independence Day</td>
                            </tr>
                            <tr>
                                <td>August 17</td>
                                <td className="Event">Marcus Garvey Day</td>
                            </tr>
                            <tr>
                                <td>August 26</td>
                                <td className="Event">Women's Equality Day</td>
                            </tr>
                            <tr>
                                <td>August 31</td>
                                <td className="Event">Tisha B'Av</td>
                            </tr>
                            {deiEvents.length > 0 && deiEvents.map((item) => (       <tr>
                                <td>{item.eventDate}</td>
                                <td className="Event">{item.eventName}</td>
                            </tr>))
                          
                            }
                            {
                                addEvent ? 
                                <tr>
                                <td><input type='text' name='eventDate' placeholder='Event Date' value={eventDate} onChange={(e) => setEventDate(e.target.value)}/></td>
                                <td className="Event"><input type='text' name='eventName' placeholder='Event Name' value={eventName} onChange={(e) => setEventName(e.target.value)}/></td>
                            </tr> : ''
                            }

                        </table>
                      {addEvent === false ?  <button type="button" className='searchbtn' onClick={() => setAddEvent(true)}> Add</button> : ''}
                       {addEvent === true ? <button type="button" className='searchbtn' onClick={saveEventHandle}>save</button> : ''}
                    </div>

                </div>

                <div className="card">
                    <h3> Job Openings - meet DEI
                       <Link to="/deiofficer/create">
                        <button type="button" className="searchbtn" style={{height:'100%'}}> Set Preferences</button></Link> </h3>
                        <div className="scrollbar">
                        { jobs.length > 0 && jobs.map((item) => ( <>  <button type="button" name={item.role} className="searchbtn" onClick={deleteHandle}> Delete</button>
                        <Link to="/deiofficer/jobDescription">
                            <div className="card"><div className="container">
                                <b>{item.role}</b>
                                <p>{item.course}</p>
                            </div>
                            </div>
                        </Link></>)) }
                    
                      
                    </div>
                </div>

                <div className="card">
                    <h3>New Initiatives</h3>

                    <div className="scrollbar1">
                        <div className="center">
                            <table>
                                <tr>
                                    <th>Sno</th>
                                    <th className="research">Initiative_Description</th>
                                
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className="research">Inclusion and Diversity Trainings</td>
                                    
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className="research">Employee Resource Group (ERG'S)</td>
                                    
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className="research">Recruitment and Hiring Practices</td>
                                    
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className="research">Policy Changes</td>
                                   
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td className="research">Employee Engagement and Retention</td>
                        
                                </tr>
                                {deiInitiatives.length > 0 && deiInitiatives.map((item) => (       <tr>
                                <td>{item.initSi}</td>
                                <td className="research">{item.initName}</td>
                            </tr>))
                          
                            }
                               {
                                addInit ? 
                                <tr>
                                <td><input type='text' name='initSi' placeholder='S No' value={initSi} onChange={(e) => setInitSi(e.target.value)}/></td>
                                <td className="research"><input type='text' name='initName' placeholder='Initiative Name' value={initName} onChange={(e) => setInitName(e.target.value)}/></td>
                            </tr> : ''
                            }
                            </table>
                            {addInit === false ?  <button type="button" className='searchbtn' onClick={() => setAddInIt(true)}> Add</button> : ''}
                            {addInit === true ? <button type="button" className='searchbtn' onClick={saveInitHandle}>save</button> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DeiDashboardPage;