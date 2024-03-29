import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import "../../App.css"


function Home() {

    const[users,setUsers]=useState([]);

    useEffect(()=>
    {
    loadUsers();
    },[]);

    const loadUsers= async ()=>
    {
  const result=await axios.get("http://localhost:3003/users");
  //console.log(result.data);
setUsers(result.data.reverse());
    }
const deleteUser=async id=>
{
  await axios.delete(`http://localhost:3003/users/${id}`)
  loadUsers();
}

  return (
     

    <div className='container'>
    <div className='py-6 '><h1 className='text-center m-3'>HOME PAGE</h1>
    <table className="table border shadow">

  <thead className='table-dark'>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th >Action</th>
    </tr>
  </thead>
  <tbody>
  {
      users.map((user,index)=>
      (<tr>
        <th scope="row">{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
           <Link className='btn btn-outline-primary btn-sm mx-1' to={`/users/view/${user.id}`}>VIEW</Link>
        <Link className='btn btn-outline-warning btn-sm mx-2' to={`/users/edit/${user.id}`}>EDIT</Link>
      <button className='btn btn-outline-danger btn-sm ' onClick={()=>deleteUser(user.id)}>DELETE</button></td>
      </tr>))
  }
  </tbody>
</table>
       
       
       </div> </div>

  )
}

export default Home