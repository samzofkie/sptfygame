import React from "react"

import "../css/App.css"
import SpotifyLoginButton from "./SpotifyLoginButton"
import Title from "./Title"

const breaks = n => [...Array(n)].map( (_,i) => <br key={i} /> )

export default function App() {
    return(
        <>
        <Title />
        { breaks(5) }
        <SpotifyLoginButton />
        { [...Array(10)].map( (_,i) => <br key={i}/> ) }
        <p>{"* im j messin w u. this app is safe, the link actually goes 2 spotify, n im not gonna hack ur acct or anything"}</p>
        </>
    )
}
