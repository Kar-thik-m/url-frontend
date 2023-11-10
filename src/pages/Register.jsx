import { useState } from "react";
import { backendUrl } from "../../config";
import { useNavigate } from "react-router-dom";

const Register = () => {
const navigate=useNavigate();

const navigateToLogin=()=>{
  navigate('/login')
}
const navigateToInfo=()=>{
  navigate('/info')
        
}
    const initialState ={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
    }
    const [userData,setUserData]=useState(initialState)
    const handleSubmit = async(e) => {
      e.preventDefault();
        
        const userResponse=await fetch(`${backendUrl}/register`,{
            method:'POST',
            body:JSON.stringify(userData),
            headers:{
                'Content-Type': 'application/json',
            }
        })
        const data=await userResponse.json();
        if(userResponse.status===200){
          alert("user created successfully please check you email to validate")

          
        }
        else if(userResponse.status===409){
          alert("user already exists please login");
          setUserData(initialState)
        }
      

    }
  return (
    <section className="container-fluid" style={{marginTop:'7%'}}>
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
      <h1 className="text-center  fs-2">Register Page</h1>
      <form >
      <div className="form-group">
          <label htmlFor="firstname"  className="m-1">First Name :</label>
          <input
           className="form-control m-1"
            type="text"
            name="firstname"
            id="firstname"
            value={userData.firstname}
            placeholder="enter your firstname"
            onChange={(e)=>setUserData({...userData,firstname:e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname"  className="m-1">Last Name :</label>
          <input
           className="form-control m-1"
            type="text"
            name="lastname"
            id="lastname"
            value={userData.lastname}
            placeholder="enter your lastname"
            onChange={(e)=>setUserData({...userData,lastname:e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"  className="m-1">Email :</label>
          <input
           className="form-control m-1"
            type="email"
            name="email"
            id="email"
            value={userData.email}
            placeholder="enter your email address"
            onChange={(e)=>setUserData({...userData,email:e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"  className="m-1">Password :</label>
          <input
           className="form-control m-1"
            type="password"
            name="password"
            id="password"
            value={userData.password}
            placeholder="enter your password"
            onChange={(e)=>setUserData({...userData,password:e.target.value})}
            required
          />
        </div>
        <div className="row justify-content-center m-2">
        <button type="submit" className="btn btn-primary btn-block my-4 mx-1"   onClick={(e)=>{handleSubmit(e);navigateToInfo();}}>submit</button>
        </div>
        <div className="fw-light m-3 text-center">
       <h5  className="fw-light m-3 text-center">Already have account  <button className="btn btn-outline-warning mx-5" onClick={navigateToLogin}>Login</button></h5></div>
      </form>
      </section>
    </section>
  </section>
  );
};

export default Register;