import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; /* Generating unique id*/

import isTonicOrElixir from "../reusableFunctions/isTonicOrElixir"
import hylianLogo from "../assets/Hylian_Symbol.png"

export default function ElixirInfo() {
    const params = useParams()
        // const location = useLocation() /*Where user is in application */
    const [elixirDetail, setElixirDetail] = React.useState([]);
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function getElixirDetail() {
            setLoading(true)
            try {
                const res = await fetch(`/api/${params.elixirName}`)
                const data = await res.json()
                setElixirDetail(data.items[0])
            }
            catch (err) {
                console.log("Unable to load...")
            }
            setLoading(false)
        }
        getElixirDetail()
    }, [params.elixirName])

    if (loading) {
        return (
            <main id="loading__page" className="container col">
                <img className="loadingLogo" src={hylianLogo} alt="" />
                <h2>Loading...</h2>
            </main>
        )
    }

    const ingredients = elixirDetail.ingredients

    return (
        <main className="container">
            <Link className="elixir__backlink" to="..">&#8678; Back to Elixirs and Tonics</Link>
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
        </main>
    );
}