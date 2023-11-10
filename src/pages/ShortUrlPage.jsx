import { backendUrl } from "../../config";
import { useParams } from "react-router-dom";

const ShortUrlPage = () => {
  const { urlId } = useParams();
  const short=async()=>{
  try{
    const response=await fetch(`${backendUrl}/${urlId}`);
    const data=await response.json();
    if(data.fullUrl){
     window.location.href=data.fullUrl
    }
    else{
      console.log("there was a problem fetching")
    }
   
  }catch(err){console.log(err.message)}
}
short();
  return <div>pls wait to redirect</div>;
};

export default ShortUrlPage;