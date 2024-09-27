import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPersonRunning,
    faCircleNotch,
    faWater,
    faSun,
    faLightbulb,
    faHeartCirclePlus,
    faFireFlameCurved,
    faUserNinja,
    faSnowflake,
    faBolt,
    faShield,
    faWandSparkles,
    faSpider
} from '@fortawesome/free-solid-svg-icons'

import isTonicOrElixir from "../reusableFunctions/isTonicOrElixir"

import { Link } from "react-router-dom";


export default function Card(props) {
    function CardPowerIcon() {
        switch (output.tag){
            case('Speed') : return <FontAwesomeIcon icon={faPersonRunning} className="elixir__card-icon" />
            case('Cold') : return <FontAwesomeIcon icon={faSnowflake} className="elixir__card-icon" color="#489fb5" />
            case ('Hearts') : return <FontAwesomeIcon icon={faHeartCirclePlus} className="elixir__card-icon" color="#e56b6f" />
            case ('Shock') : return <FontAwesomeIcon icon={faBolt} className="elixir__card-icon" color="#ffd166" />
            case ('Sneaky') : return <FontAwesomeIcon icon={faUserNinja} className="elixir__card-icon" color="#6d597a" />
            case ('Glow') : return <FontAwesomeIcon icon={faLightbulb} className="elixir__card-icon" color="#fcca46" />
            case ('Slip') : return <FontAwesomeIcon icon={faWater} className="elixir__card-icon" color="#6096ba" />
            case ('Defence') : return <FontAwesomeIcon icon={faShield} className="elixir__card-icon" color="#70798c" />
            case ('Stamina') : return <FontAwesomeIcon icon={faCircleNotch} className="elixir__card-icon" color="#8cb369" />
            case ('Flame') : return <FontAwesomeIcon icon={faFireFlameCurved} className="elixir__card-icon" color="#f9844a" />
            case ('Attack') : return <FontAwesomeIcon icon={faWandSparkles} className="elixir__card-icon" color="#5e548e" />
            case ('Heat') : return <FontAwesomeIcon icon={faSun} className="elixir__card-icon" color="#fec89a" />
            case ('Sticky') : return <FontAwesomeIcon icon={faSpider} className="elixir__card-icon" color="#000000" />    
        }
    }

    const output = props.item
    return (
        <Link className="elixir__card-link" to={output.name} aria-label={`View ${isTonicOrElixir(output.name)} here`}>
            <li className="elixir__card card row">
                <img loading="lazy" src={`src/assets/Elixirs/${output.imageURL}`} alt={`${isTonicOrElixir(output.name)} image preview`} />
                <div id="card__text" className="col">
                    <h2>{isTonicOrElixir(output.name)}</h2>
                    <CardPowerIcon />
                </div>
            </li>
        </Link>
    )
}


