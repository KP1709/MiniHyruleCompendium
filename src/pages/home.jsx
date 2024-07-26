import React, { Suspense } from "react";
import Card from "../component/card"
import { useLoaderData, useSearchParams, defer, Await } from "react-router-dom";

import { getAllElixirs } from "../ApiEndpoints/getAllElixirs"

import hylianLogo from "../assets/Hylian_Symbol.png"

// Using API data loader <- added into React Router
export function loader() {
    return defer({ allMaterials: getAllElixirs() })
}

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const dataPromise = useLoaderData()

    function renderElement(allMaterials) {
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

        return (
            <>
                {cardElement}
            </>
        )

    }

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
                <Suspense fallback={<Loading/>}>
                    <Await resolve={dataPromise.allMaterials}>
                        {renderElement}
                    </Await>
                </Suspense>
            </ul>
        </main>
    )
}


