import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'

function ViewUser() {


    const[user,setUser]=useState({
name:"",
username:"",
email:"",
phone:"",
website:"",

    })

    const {id}=useParams();

    useEffect(()=>
    {

loadUser();
    },[])


const loadUser=async ()=>
{
const res=await axios.get(`http://localhost:3003/users/${id}`);
setUser(res.data); 

}
const deleteUser=async id=>
{
  await axios.delete(`http://localhost:3003/users/${id}`)
  
}




  return (
  <>
  
   <div className='container'>
    <div className='py-6'><h1>HOME PAGE</h1>
    <table className="table border shadow">

  <thead className='table-dark'>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Name</th>
       <th scope="col">Email</th>
      <th scope="col">Phone</th> 
        <th scope="col">Website</th>
      <th >Action</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>{id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
    
        <td>
   
        <Link className='btn btn-outline-warning btn-sm mx-2' to={`/users/edit/${user.id}`}>EDIT</Link>
        <button className='btn btn-outline-danger btn-sm ' onClick={()=>deleteUser(user.id)}>DELETE</button>
    </td>
      </tr>
  </tbody>
</table>
       
       
       </div> </div>
  
  </>
      );
}

export default ViewUser;