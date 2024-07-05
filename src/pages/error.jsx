import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <main id="error__404" className="card">
            <h1>Error: Page does not exist</h1>
            <Link to="/">Go back to homepage here</Link>
        </main>
    )
}