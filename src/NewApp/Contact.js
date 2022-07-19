import React from "react";
import {useState} from "react";

function Contact()
{

const [info,setInfo]=useState({
    nam:"",
    num:"",
    ema:"",
    msg:""
});

const changeData=(e)=>
{
    const name=e.target.name;
    const val=e.target.value;
     setInfo({
        [name]:val
    });


}

const formSubmit=(e)=>{
    e.preventDefault();
    setInfo({  nam:"",
    num:"",
    ema:"",
    msg:""});
}


    return(
        <>
      <div className="my-5">
      <h1>{info.msg}</h1>
<h1>{info.nam}</h1>
      <h1 className="text-center">Contact Us</h1>

      </div>
<div className="container-fluid">
    <div className="row">
     
       <div className="col-md-5  col-10 mx-auto">
    <form onSubmit={formSubmit}>
        <div class="mb-3">
  <label  class="form-label">Name</label>
  <input type="text" class="form-control"  placeholder="Enter Your Name"  name="fir"  value={info.nam} onChange={changeData}/>
</div>
<div class="mb-3">
  <label class="form-label">Phone</label>
  <input type="text" class="form-control"  placeholder="Enter Phone Number"  name="sec"  value={info.num} onChange={changeData}/>
</div>
        <div class="mb-3">
  <label  class="form-label">Email</label>
  <input type="email" class="form-control" placeholder="name@example.com" name="thi"  value={info.ema} onChange={changeData}/>
</div>
<div class="mb-3">
  <label  class="form-label">Message</label>
  <textarea class="form-control" rows="3" name="for" value={info.msg} onChange={changeData}></textarea>
</div>
<div  >
<button type="submit" className="btn btn-success mx-auto d-block ">SUBMIT</button>
</div>
</form>
        </div>

      
    </div>

</div>

        </>
    )
}

export default Contact;