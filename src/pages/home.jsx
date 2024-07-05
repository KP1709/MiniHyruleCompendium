import React from "react";
import Card from "../component/card"
import { useLoaderData, useSearchParams } from "react-router-dom";

import { getAllElixirs } from "../ApiEndpoints/getAllElixirs"


// Using API data loader <- added into React Router
export function loader() {
    return getAllElixirs()
}

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const allMaterials = useLoaderData()

    const typeFilter = searchParams.get("ingredientsNo")
    // console.log(typeFilter)

    const displayElixirs = typeFilter
        ? allMaterials.filter(elixir => elixir.ingredientsNo === typeFilter)
        : allMaterials

    const cardElement = displayElixirs.map((item) => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <main className="container">
            {/* <div className="row">
                <h2>Number of Ingredients: </h2>
                <ul id="" className="row">
                    <li><button onClick={() => handleFilterChange("ingredientsNo", '1')} aria-label="1 Ingredient Elixirs">1</button></li>
                    <li><button onClick={() => handleFilterChange("ingredientsNo", '2')} aria-label="2 Ingredient Elixirs">2</button></li>
                    <li><button onClick={() => handleFilterChange("ingredientsNo", '3')} aria-label="3 Ingredient Elixirs">3</button></li>
                    <li><button onClick={() => handleFilterChange("ingredientsNo", null)}>Clear Filter</button></li>
                </ul>
            </div> */}
            <ul id="grid__items" className="grid">
                {cardElement}
            </ul>
        </main>
    )
}


