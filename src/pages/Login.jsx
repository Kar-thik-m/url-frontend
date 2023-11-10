import { useState } from "react";
import { backendUrl } from "../../config";
import { useNavigate } from "react-router-dom";

const Login = () => {
const navigate=useNavigate();

    const initialState = {
        email:"",
        password:"",
    }
    const [formData,setFormData] =useState(initialState)
    const navigateToRegister=()=>{
        navigate('/')
      }
      const navigateToUrl=()=>{
        navigate('/urlregister')
      }
      const navigateToForgot=()=>{
        navigate('/forgot')
      }
    const handleSubmit=async(e)=>{
         e.preventDefault();
         
         const loginResponse=await fetch(`${backendUrl}/login`,{
            method: 'POST',
            body:JSON.stringify(formData),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const data=await loginResponse.json();
         
         if(loginResponse.status===401)
         {
            alert('Login failed invalid credentials please try again with correct credentials')
            setFormData(initialState)
         }
         else if(loginResponse.status===404){
            alert('user not found please register user information')
            navigateToRegister();
         }
         else if(loginResponse.status===402){
          alert('user is not verified please check your email to verify or creaete new account')
         }
         else{
            alert('Login successful')
            localStorage.setItem('user',JSON.stringify(data))
            setFormData(initialState)
            navigateToUrl();
         }
         
    }
  return (
    <section className="container-fluid" style={{marginTop:'11%'}}>
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
      <h1>Login Form</h1>
      <form>
      <div className="form-group">
          <label htmlFor="email" className="m-1">Email :</label>
          <input 
          className="form-control m-1"
            name="email" 
            type="email" 
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
            placeholder="enter your email" />
            
        </div>
        <div className="form-group">
          <label htmlFor="password" className="m-1">Password :</label>
          <input
          className="form-control m-1"
            name="password"
            type="passsword"
            onChange={(e)=>setFormData({...formData,password:e.target.value})}
            placeholder="enter your password"
          />
        </div>
        <div className="row justify-content-center m-2">
        <button type="submit" className="btn btn-primary btn-block my-4 mx-1" onClick={handleSubmit}>Submit</button>
        <button type="submit" className="btn btn-danger btn-block " onClick={navigateToForgot}>Forgot Password</button>
        </div>
        <div className="row justify-content-center .m-5">
        <h4 className="fw-light m-3 text-center">Dont have account <button className="btn btn-outline-warning mx-5" onClick={navigateToRegister}>Register ?</button></h4>

        </div>
        
      </form>
      </section>
    </section>
  </section>

  );
};

export default Login;