import { useState,useEffect } from 'react';
import axios from 'axios';


const useFetch = (endpoint, query) =>{
    
    const[ data , setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[error , setError] = useState(null);
    
    

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1d7f599bf9msh86fcd022aa25d24p1067e5jsn1074bd86389b',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {...query},
 
};
const fetchData = async()=>{
    setIsLoading(true);
try{
    const response = await axios.request
    (options);
    setData(response.data.data);
    setIsLoading(false);

}catch(error){
   setError(error);
   alert('there is an error')

}finally{
   setIsLoading(false);
}
}
 useEffect(() => {
   fetchData();
 
 },[]);
 const refetch =()=>{
    setIsLoading(true);
    fetchData();
 }
 return{data,isLoading,error,refetch};
 }
  export default useFetch;

 
