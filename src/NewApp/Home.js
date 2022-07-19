import React from "react";
import img from "../NewApp/n1.svg"
import {NavLink} from "react-router-dom";
import Common from "./Common";
function Home() {
    return (
        <>
        <Common
        name="Grow Your Bussiness With"
        img={img}
        visit="/service"
        bt="Get Started"
        

        />
        </>
    )
}

export default Home;