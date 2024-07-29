import React, { Suspense } from "react";
import Loading from "../component/loading"
import {Link, useLocation, defer, Await, useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; /* Generating unique id*/

import { getAllElixirs } from "../ApiEndpoints/getAllElixirs";

import isTonicOrElixir from "../reusableFunctions/isTonicOrElixir"

export function loader({ params }) {
    // Problem is that elixirDetail gets all elixirs than the one selected
    console.log(params.elixirName)
    return defer({ elixirDetail: getAllElixirs(params.elixirName) })
}

export default function ElixirInfo() {
    // const location = useLocation() /*Where user is in application */
    const dataPromise = useLoaderData()

    function renderElement(elixirDetail) {
        const info = elixirDetail[0]
        const ingredients = elixirDetail[0].ingredients

        return (
            <div id="elixir__card-grid" className="elixir__card-info card grid">
                <img id="elixir__card-img" src={`src/assets/Elixirs/${info.imageURL}`} alt={`${isTonicOrElixir(info.name)} image preview`} />

                <div id="elixir__card-head">
                    <h1 id="elixir__card-name">{isTonicOrElixir(info.name)}</h1>
                    <p>Effect: {info.effect}</p>
                </div>

                <div id="elixir__card-description">
                    <h2 className="elixir__info-subhead">Description</h2>
                    <p>{info.description}</p>
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

    return (
        <main className="container">
            <Link className="elixir__backlink" to="..">&#8678; Back to Elixirs and Tonics</Link>
            <Suspense fallback={<Loading />}>
                <Await resolve={dataPromise.elixirDetail}>
                    {renderElement}
                </Await>
            </Suspense>
        </main>
    )
}