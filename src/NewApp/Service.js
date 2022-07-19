import React from "react";
import Card from "./Card";
import data from './api';
function Service()
{
    return(
        <>
      
               <div className="my-5">
<h1 className="text-center">Our Services</h1>
</div>

<div className="container-fluid">
    <div className="row">
<div  className="col-10 mx-auto">
    <div className="row">

        {
            data.map((val,index)=>
            {
                return(
                    <Card img={val.img} title={val.title}/>
                )
            })
        }

    </div>
</div>

    </div>
    </div>
            </>
    )
}

export default Service;