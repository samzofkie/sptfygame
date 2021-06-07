import React from 'react'
import ReactDOM from 'react-dom'

import SpotifyLoginButton from "../src/SpotifyLoginButton"

//ReactDOM.render( <SpotifyLoginButton /> )

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SpotifyLoginButton/>,
    document.body.appendChild(document.createElement('div')),
  )
})
