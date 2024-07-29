import React from "react";
import hylianLogo from "../assets/Hylian_Symbol.png"

export default function Loading(){
    return (
        <main id="loading__page" className="container col">
            <img className="loadingLogo" src={hylianLogo} alt="" />
            <h2>Loading...</h2>
        </main>
    )
}