import React from "react"
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import "/server"

import Layout from "./component/layout"
import Home, {loader as HomeLoader} from "./pages/home"
import ErrorPage from "./pages/error"
import ElixirPage from "./pages/elixirInfo"
import ErrorLoaderPage from "./pages/errorLoader"

export default function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Home />} loader={HomeLoader} errorElement={<ErrorLoaderPage/>}/>
            <Route path="/:elixirName" element={<ElixirPage />} />
        </Route>
    ))

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}