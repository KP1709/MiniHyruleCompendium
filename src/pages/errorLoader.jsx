import React from "react";
import { useRouteError } from "react-router-dom";

// Used as errorElement when using API data loader

export default function ErrorLoader() {
    const error = useRouteError()
    return (
        <main className="flex">
            <div id="error__card" className="card">
                <h1>{error.status}</h1>
                <h2>{error.statusText}: {error.message}</h2>
            </div>
        </main>

    )
}