import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const navigate =useNavigate();
    useEffect(() =>{
        navigate('/login', {replace: true});
    }, []);
  return (
    <div>Please wait...</div>
  )
}

export default LogoutPage;