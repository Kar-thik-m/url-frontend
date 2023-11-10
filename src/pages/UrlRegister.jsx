import { useState } from "react";
import { backendUrl } from "../../config";
import { useNavigate } from "react-router-dom";
const UrlRegister = () => {
  const navigate=useNavigate();

    const [result,setResult]=useState(false)
    const [fullUrl,setFullUrl] = useState('')
    const [date,setDate]=useState('')
    const [Url,setUrl]=useState('')
    const [clicks,setClicks]=useState('')

    const handleUrl=(e)=>{
        setFullUrl(e.target.value);
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const register=await fetch(`${backendUrl}/urlcreate`,{
                method: 'POST',
                body:JSON.stringify({fullUrl}),
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            const data=await register.json();
            console.log(data)
            const smallUrl=data.shortUrl
            if(data){

               setClicks(data.clicks);
               setUrl(smallUrl);

               setDate(data.date);

            } 
          else(console.log("data not found"))
        }catch(error){
            console.log("error in posting url to db "+error)
        }
      setResult(true)
  
        console.log("url :",fullUrl)
       
    }
  
    const reset=()=>{
        setResult(false);
        setFullUrl('');
    }
    
  return (
    <div className="container-fluid">
      <div className="row justify-content-end">
      <button className="col-1 btn btn-dark btn-rounded m-2" onClick={()=>{
        localStorage.removeItem('user')
        navigate('/login')
        }} >Logout</button>
      </div>
      <section className="container-fluid" style={{marginTop:'11%'}}>
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
      <form >
      <div className="form-group">
            <label htmlFor="url">URL</label>&nbsp;&nbsp;
            <input name="url" id="url" className="form-control m-1 link-dark"  value={fullUrl} onChange={handleUrl} placeholder="link"/>
        </div>
          {result &&<div> <div className="form-group">
            <label htmlFor="shorturl">SHORT URL :</label>
            <a className="form-control m-1 link-success"  href={Url} >{Url}</a>
        </div>
        <div className="form-group">
            <label  htmlFor="clicks">CLICKS :</label>
            <output className="form-control m-1"  name="clicks">{clicks}</output>
          </div>
          <div className="form-group">
            <label htmlFor="date">DATE : </label>
            <output className="form-control m-1"  name="date">{date}</output>
           
            </div>
            </div>}
        <button type="submit" className="btn btn-primary btn-block m-2" onClick={handleSubmit}>Submit</button>
        <button className="btn btn-danger btn-block ml-4" onClick={reset}>Reset</button>
      </form>
      </section>
    </section>
  </section>
    </div>
  );
};

export default UrlRegister;