import React, { Suspense } from "react";
import { useParams, Link, useLocation, defer, Await, useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; /* Generating unique id*/

import { getAllElixirs } from "../ApiEndpoints/getAllElixirs";

import isTonicOrElixir from "../reusableFunctions/isTonicOrElixir"
import hylianLogo from "../assets/Hylian_Symbol.png"

export function loader() {
    return defer({ elixirDetail: getAllElixirs() })
}

export default function ElixirInfo() {
    const params = useParams()
    // const location = useLocation() /*Where user is in application */
    const dataPromise = useLoaderData()
    console.log(dataPromise.elixirDetail)

    function renderElement(elixirDetail) {
        const ingredients = elixirDetail.ingredients

        return (
            <div id="elixir__card-grid" className="elixir__card-info card grid">
                <img id="elixir__card-img" src={`src/assets/Elixirs/${elixirDetail.imageURL}`} alt={`${isTonicOrElixir(elixirDetail.name)} image preview`} />

                <div id="elixir__card-head">
                    <h1 id="elixir__card-name">{isTonicOrElixir(elixirDetail.name)}</h1>
                    <p>Effect: {elixirDetail.effect}</p>
                </div>

                <div id="elixir__card-description">
                    <h2 className="elixir__info-subhead">Description</h2>
                    <p>{elixirDetail.description}</p>
                </div>

                <div id="elixir__card-ingredients">
                    <h2 className="elixir__info-subhead" >Ingredients</h2>

                    {/* Ingredients is initially null until it's loaded hence &&  */}
                    {ingredients && <ul id="elixir__card-list">
                        {ingredients.map((item) => (
                            <li key={uuidv4()}>{item}</li> /*Key must be unique amongst siblings - React docs*/
                        ))}
                    </ul>}

                </div>
            </div>
        )
    }
    
    function Loading(){
        return (
                    <main id="loading__page" className="container col">
                        <img className="loadingLogo" src={hylianLogo} alt="" />
                        <h2>Loading...</h2>
                    </main>
                )
    }

    return (
        <main className="container">
            <Link className="elixir__backlink" to="..">&#8678; Back to Elixirs and Tonics</Link>
            <Suspense fallback={<Loading/>}>
                <Await resolve={dataPromise.elixirDetail}>
                    {renderElement}
                </Await>
            </Suspense>
        </main>
    );
}