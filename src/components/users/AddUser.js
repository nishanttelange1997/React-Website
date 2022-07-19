import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddUser()
{
    let navigate=useNavigate();
const[user1,setUser1]=useState({
name:"",
username:"",
email:"",
phone:"",
website:""

});

const {name,username,email,phone,website}=user1;

const onInputChange=(e)=>
{
 
setUser1({...user1,[e.target.name]:e.target.value});
};

const onSubmit=async (e)=>
{
e.preventDefault();
await axios.post("http://localhost:3003/users",user1);
navigate("/")
}
return(
<>
<div className="container">
<div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">ADD USER</h2>

    <form onSubmit={(e)=>onSubmit(e)}>
  <div className="from-group">
      <input type="text"
      className="form-control form-control-sm "
      placeholder="Enter Your Name"
      name="name"
      value={name}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />
      <div className="from-group">
      <input type="text"
      className="form-control form-control-sm "
      placeholder="Enter Your User-Name"
      name="username"
      value={username}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />

      <div className="from-group">
      <input type="email"
      className="form-control form-control-sm "
      placeholder="Enter Your Email-Id"
      name="email"
      value={email}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />
      <div className="from-group">
      <input type="text"
      className="form-control form-control-sm "
      placeholder="Enter Your Phone Number"
      name="phone"
      value={phone}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />
      <div className="from-group">
      <input type="text"
      className="form-control form-control-sm "
      placeholder="Enter Your website Name"
      name="website"
      value={website}
      onChange={e=>onInputChange(e)}
      />
      </div>
      <br />
     
      <button className=" btn btn-success mx-auto d-block">ADD-USER</button>

  

      

</form>


</div>
</div>
</>

)

}
export default AddUser;