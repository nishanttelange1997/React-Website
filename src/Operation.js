import React,{useState} from "react";
import { useEffect } from "react";
import axios from "axios";

function Operation()
{
   let [name,setName]=useState();
   let [name1,setName1]=useState();
//    let[id,setId]=useState();

  function getData(event)
  {
      setName(event.target.value);
  }
  
useEffect(()=>{
  fetchData();
    
})

async function fetchData()
{
    const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${name}`);
  console.log(res.data)
  setName1(res.data.name);
//   setId(res.data.id);
   
}

    return(
         <>
         <h1>Hello {name}-{name1}</h1>
<div>
{/* {
name1.map((val)=>
{
    return(
    <>
    <ol>
        <li>{val.id}</li>
        <li>{val.name}</li>
        <li>{val.email}</li>
        <li>{val.phone}</li>
        <li>{val.address.city}</li>
        
    </ol>
    </>
    )
})
} */}
</div>
          <select value={name} onChange={getData} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
         </select>    

        </>
    )
}

export default Operation;
