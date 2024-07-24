import api from ".";

export const register_user =async details =>{
    
    //Registering to users table
    const res = await api.post('Uregister', details);
    
    //Fetch user ID from users table by email
    const response =await fetch("http://localhost:8000/api/getIDbymail/"+details['email']);
	const result = await response.json();
	const user_details=result[0];
    console.log("Result: ",user_details);
    
    //Passing details to respective role tables
    const role=user_details['role'];
    console.log("Role",role)

    //Candidate
    if (role =='candidate'){
        const response2 = await api.post('http://localhost:8000/api/Cregister', user_details);
        console.warn("Candidate Response ", response2)
    }
    //Recruiter
    else if(role =='recruiter'){
        const response2 = await api.post('http://localhost:8000/api/rec_register', user_details);
        console.warn("Recruiter Response ", response2) 
    }
    //Admin
    else if(role=='admin'){
        const response2 = await api.post('http://localhost:8000/api/admin_register', user_details);
        console.warn("Admin Response ", response2)
    }
    {/*
    //DEI Officer
    else if(role=='dei'){
        navigate('/deiofficer', {replace: true}); 
    }
    //Accademia
    else if(role=='academia'){
        navigate('/academia', {replace: true}); 
    }
    */}
    return res;
}

export const login_user =async data =>{
    const response =await api.post('Ulogin', data);
    return response.data;
}

export const get_users =async () =>{
    const response =await api.get('get_users');
    return response.data;
}

