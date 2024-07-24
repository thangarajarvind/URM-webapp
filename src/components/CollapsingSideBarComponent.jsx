import React, { useState,useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import user from '../assets/img/user.png';

import "./dash_css.css"
import bell from "../assets/icons/bell_icon.png";
import pp from "../assets/icons/profile_icon.png";
import message from "../assets/icons/message_icon.png";



const CollapsingSideBarComponent = ({links =[]}) => {
	
	let id = sessionStorage.getItem('id');
	let name = sessionStorage.getItem('name');


	

	//Toggle Sidebar
	const [sidebarOpen, setSidebarOpen] = useState(true);
  	const toggleSidebar = () => {
    	setSidebarOpen(!sidebarOpen);
  	};

	return (
	<header>
        <div className={`cand_sidepanel ${sidebarOpen ? 'open' : ''}`}>
  	        <a className="closebtn" onClick={toggleSidebar}>&times;</a>
            <div className="logo">
                <div className='' style={{height: '50px', borderRadius: '50%', }}>
                    <img src={user} style={{display: 'block', width: '100%', height: '100%'}}/>
                </div>
				<br/>
                <h2 style={{color:'white'}}>{name}</h2>
            </div>
            <ul className ="menu">
                {links.map(({to, label, icon}, index) =>(<li key={index}><NavLink to={to}><i className ={icon}></i><span>{label}</span></NavLink></li>))}
            </ul>
        </div>

    <div className="topnav">
   		<button className="openbtn" onClick={toggleSidebar}>&#9776;</button>
		<div className="dropdown">
			<button className="dropbtn">{name}<img className="icons" src={pp} />
			</button>
			<div className="dropdown-content">
			  <NavLink  to="/candidate/profile">Profile</NavLink>
			  <NavLink  to="/candidate/settings">Settings</NavLink>
			  <NavLink  to="/logout">Logout</NavLink>
			  
			</div>
		  </div>
		<div className="dropdown">
			<button className="dropbtn"><img className="icons" src={bell}/>
			</button>
			<div className="dropdown-content">
			  <a href="#">Mr A has scheduled an interview</a>
			  <a href="#">Notification 2</a>
			  <a href="#">Notification 3</a>
			</div>
		</div>
		<div className="dropdown">
			<button className="dropbtn"><img className="icons" src={message}/>
			</button>
			<div className="dropdown-content">
			  <a href="#">Recruiter A : "Hello, How are you doing today?"</a>
			  <a href="#">Recruiter B : "I'm interested in your resume"</a>
			  <a href="#">DEI C : "Bum Bum Bole"</a>
			</div>
		</div>
			<input type="text" placeholder="Search Users.."/>
	</div>
	
    </header>
        

    )
}

export default CollapsingSideBarComponent;