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
        let icon;
        if (output.tag === 'Speed') {
            icon = <FontAwesomeIcon icon={faPersonRunning} className="elixir__card-icon" />
        }
        else if (output.tag === 'Cold') {
            icon = <FontAwesomeIcon icon={faSnowflake} className="elixir__card-icon" color="#489fb5" />
        }
        else if (output.tag === 'Hearts') {
            icon = <FontAwesomeIcon icon={faHeartCirclePlus} className="elixir__card-icon" color="#e56b6f" />
        }
        else if (output.tag === 'Shock') {
            icon = <FontAwesomeIcon icon={faBolt} className="elixir__card-icon" color="#ffd166" />
        }
        else if (output.tag === 'Sneaky') {
            icon = <FontAwesomeIcon icon={faUserNinja} className="elixir__card-icon" color="#6d597a" />
        }
        else if (output.tag === 'Glow') {
            icon = <FontAwesomeIcon icon={faLightbulb} className="elixir__card-icon" color="#fcca46" />
        }
        else if (output.tag === 'Slip') {
            icon = <FontAwesomeIcon icon={faWater} className="elixir__card-icon" color="#6096ba" />
        }
        else if (output.tag === 'Defense') {
            icon = <FontAwesomeIcon icon={faShield} className="elixir__card-icon" color="#70798c" />
        }
        else if (output.tag === 'Stamina') {
            icon = <FontAwesomeIcon icon={faCircleNotch} className="elixir__card-icon" color="#8cb369" />
        }
        else if (output.tag === 'Flame') {
            icon = <FontAwesomeIcon icon={faFireFlameCurved} className="elixir__card-icon" color="#f9844a" />
        }
        else if (output.tag === 'Attack') {
            icon = <FontAwesomeIcon icon={faWandSparkles} className="elixir__card-icon" color="#5e548e" />
        }
        else if (output.tag === 'Heat') {
            icon = <FontAwesomeIcon icon={faSun} className="elixir__card-icon" color="#fec89a" />
        }
        else if (output.tag === 'Sticky') {
            icon = <FontAwesomeIcon icon={faSpider} className="elixir__card-icon" color="#000000" />
        }
        return icon;
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


