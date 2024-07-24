import React, { useState,useEffect } from 'react';
import './css/profile_content_css.css'
import './css/Home_Content_CSS.css'

const ProfilePage = () => {


	let id = sessionStorage.getItem('id');
	let name = sessionStorage.getItem('name');
	let role = sessionStorage.getItem('role');
	console.log("ID : ",id)

	//Profile Data
	const [profile_data,setProfile_Data] = useState([]);  
	useEffect(() => {
	  async function fetchMyAPI(){
		const response =await fetch("http://localhost:8000/api/getCandidatebyid/"+id);
		const result = await response.json();
		console.log("Result: ",result);
    	setProfile_Data(result[0]);
		console.log("Profile Data",profile_data)
		}
		fetchMyAPI()
	},[])
	console.warn("Profile Data:",profile_data)
  
	
	//Query to Upload File
	const [selectedFile, setSelectedFile] = useState(null);
  	const handleFileChange = (event) => {setSelectedFile(event.target.files[0]);};
  	const handleUpload = () => {
    if (selectedFile) {
      // Here you can implement the logic to upload the file to a server
      console.log('Uploading file:', selectedFile.name);
	  alert('Uploading file:', selectedFile.name);
    } else {
      console.log('No file selected.');
	  alert('No file selected.')
    	}
  	};

	//Update Data
	const [fname,setfname] = useState(profile_data['fname']);
	const [lname,setlname] = useState(profile_data['lname']);
	const [dob,setdob] = useState(profile_data['dob']);
	const [email,setemail] = useState(profile_data['email']);
	const [phone,setphone] = useState(profile_data['phone']);
	const [address,setaddress] = useState(profile_data['address']);
	const [nationality,setnationality] = useState(profile_data['nationality']);
	const [ethnicity,setethnicity] = useState(profile_data['ethnicity']);
	const [edu,setedu] = useState(profile_data['edu']);
	const [publications,setpublications] = useState(profile_data['publications']);
	const [aoi,setaoi] = useState(profile_data['aoi']);
	const [pref_pos,setpref_pos] = useState(profile_data['pref_pos']);
	const [pref_uni,setpref_uni] = useState(profile_data['pref_uni']);
	const [pref_loc,setpref_loc] = useState(profile_data['pref_loc']);
	
	async function Update(){
		let item = {fname,lname,dob,email,phone,address,nationality,ethnicity,edu,publications,aoi,pref_pos,pref_loc,pref_uni}
		console.warn(item)
		let result = await fetch("http://localhost:8000/api/cpUpdate/"+id,{
		  method:'PUT',
		  body:JSON.stringify(item),
		  headers:{
			"Content-Type":'application/json',
			"Accept":'application/json'
		  }
		})
		result = await result.json()
		console.warn("result",result)
		alert("Profile Updated!")
		location.reload()
	  }

  	return (
    
	<div id="content">
		<h1>Profile</h1>

		<div className="cand_row">
			<div className="cand_column">
			  <center><h3>Personal Details</h3></center>
			  <hr/>
			  <div className="card">
				<label htmlFor="fname"><b>First Name</b></label>
    			{/*<input type="text" placeholder="First Name" name="fname" id="fname" value={fname} onChange={(e)=>{setfname(e.target.value);Update;}} defaultValue={profile_data['name']} required/>*/}
    			<input type="text" placeholder="First Name" name="fname" id="fname" value={profile_data.fname} onChange={(e)=>{setfname(e.target.value);}} defaultValue={profile_data['fname']} required/>
			  </div>

			  <div className="card">
				<label htmlFor="lname"><b>Last Name</b></label>
    			<input type="text" placeholder="Last Name" name="lname" id="lname" value={profile_data.lname} onChange={(e)=>{setlname(e.target.value);Update;}} defaultValue={profile_data['lname']}required/>
			  </div>

			  <div className="card">
				<label htmlFor="dob"><b>DOB</b></label>
    			<input type="date" id="start" name="trip-start" value={profile_data.dob} onChange={(e)=>{setdob(e.target.value);Update;}} placeholder="2018-07-22" min="1920-01-01" max="2023-08-04" defaultValue={profile_data['dob']}/>
			  </div>
 
			  <div className="card">
				<label htmlFor="email"><b>Email</b></label>
    			<input type="text" value={profile_data.email} onChange={(e)=>{ setemail(e.target.value); Update;}} placeholder="Enter Email" name="email" id="email" defaultValue={profile_data['email']} required/>
			  </div>

			  <div className="card">
				<label htmlFor="phno"><b>Phone No</b></label>
    			<input type="text" placeholder="123456789" value={profile_data.phone} onChange={(e)=>{setphone(e.target.value);Update;}} name="phno" id="phno" defaultValue={profile_data['phone']} required/>
			  </div>

			  <div className="card">
				<label htmlFor="address"><b>Address</b></label>
    			<input type="text" value={profile_data.address} onChange={(e)=>{setaddress(e.target.value);Update;}} placeholder="Address" name="address" id="address" defaultValue={profile_data['address']} required/>
			  </div>
			  
			  <div className="card">
				<label htmlFor="ntnl"><b>Nationality</b></label>
    			<input type="text" value={profile_data.nationality} onChange={(e)=>{setnationality(e.target.value);Update;}} placeholder="Nationality" name="ntnl" id="ntnl" defaultValue={profile_data['nationality']} required/>
			  </div>

			  <div className="card">
				<label htmlFor="etny"><b>Ethnicity</b></label>
    			<input type="text" value={profile_data.ethnicity} onChange={(e)=>{setethnicity(e.target.value);Update;}} placeholder="Ethnicity" name="etny" id="etny" defaultValue={profile_data['ethnicity']} required/>
			  </div>

			</div>
		  
			<div className="cand_column">
			  <center><h3>Academic Details</h3></center>
			  <hr/>
			  
			  <div className="card">
				<label htmlFor="ResFile">Select a file:</label>
        		<br/>
				<input type="file" onChange={handleFileChange} id="ResFile" name="ResFile" defaultValue={profile_data['resume']}/>
      			<button onClick={handleUpload} type="button" className="Resbtn">Upload Resume</button>
			  </div>
			  
			  <div className="card">
				<label htmlFor="CVFile">Select a file:</label>
				<br/>
				<input type="file" onChange={handleFileChange} id="CVFile" name="CVFile" defaultValue={profile_data['cv']}/>
      			<button onClick={handleUpload} type="button" className="CVbtn">Upload CV</button>
			  </div>

			  <div className="card">
				<label htmlFor="edu"><b>Highest Education</b></label>
    			<select id="edu" value={profile_data.edu} onChange={(e)=>{setedu(e.target.value);Update;}} name="edu" form="edu" defaultValue={profile_data['edu']}>
					<option value="-">-</option>
					<option value="School">School</option>
					<option value="High School">High School</option>
					<option value="Undergraduate">Undergraduate</option>
					<option value="Graduate">Graduate</option>
					<option value="PhD">PhD</option>
					<option value="Post Doc">Post Doc</option>
				  </select>
			  </div>

			  <div className="card">
				<label htmlFor="publ"><b>Publications</b></label>
    			<textarea id="publ" value={profile_data.publications} onChange={(e)=>{setpublications(e.target.value);Update;}} name="publ" rows="4" cols="40" defaultValue={profile_data['publications']}></textarea>
			  </div>

			  <div className="card">
				<label htmlFor="aoi"><b>Area of Interest</b></label>
    			<textarea id="aoi" value={profile_data.aoi} onChange={(e)=>{setaoi(e.target.value);Update;}} name="aoi" rows="4" cols="40" defaultValue={profile_data['aoi']}></textarea>
			  </div>
 

			</div>
			
			<div className="cand_column">
			  <center><h3>Preferences</h3></center>
			  <hr/>
			  <div className="card">
				<label htmlFor="pref_pos"><b>Position</b></label>
    			<input type="text" value={profile_data.pref_pos} onChange={(e)=>{setpref_pos(e.target.value);Update;}} placeholder="Pref Positions" defaultValue={profile_data['pref_pos']} name="pref_pos" id="pref_pos" required />
			  </div>

			  <div className="card">
				<label htmlFor="pref_uni"><b>University</b></label>
    			<input type="text" value={profile_data.pref_uni} onChange={(e)=>{setpref_uni(e.target.value);Update;}} placeholder="Pref University" defaultValue={profile_data['pref_uni']} name="pref_uni" id="pref_uni" required />
			  </div>

			  <div className="card">
				<label htmlFor="pref_loc"><b>Location</b></label>
    			<input type="text" value={profile_data.pref_loc} onChange={(e)=>{setpref_loc(e.target.value);Update;}} placeholder="Pref Location" defaultValue={profile_data['pref_loc']} name="pref_loc" id="pref_loc" required />
			  </div>
			</div>
			
			<button type="submit" onClick={Update}>Update</button>
				
		</div>
    </div>

  )
}

export default ProfilePage;