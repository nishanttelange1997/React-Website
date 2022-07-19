import React from "react";
import about from "../NewApp/about.svg"

import Common from "./Common";
function About()
{
    return(
        <>
         <Common
        name="Welcome To About Page"
        img={about}
        visit="/contact"
        bt1="Contact Here"
   

        />
        </>
    )
}

export default About;