import React from "react";
import {NavLink}  from "react-router-dom";

function Common(props)
{
    return(
        <>
          <div  id="header" className="mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-6 pt-5 order-2 mt-5"  >
                                <h1 >{props.name} <strong className="text-primary">Nishant</strong></h1>
                                <h6 className="my-3"> Welcome To <strong className="text-primary">Nishant Consultancy</strong></h6>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn btn-outline-primary " style={{ borderRadius: "20px" }}>{props.bt} {props.bt1}</NavLink>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src={props.img} alt="Bussiness-Image"   className="img-fluid"/>
                             
                            </div>
                        </div> 
                        </div>
                         </div>
                </div>
            </div>
        </>
    )
}

export default Common;