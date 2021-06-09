import React, { createContext } from 'react'
import {render} from 'react-dom'

import App from "../src/App"

export const UriContext = createContext()

document.addEventListener('DOMContentLoaded', () => {
  // The auth_uri has been declared earlier, before this file is loaded in head tag of entrances/index.html.erb
  render( 
    <UriContext.Provider value={ auth_uri }>
      <App auth_uri={auth_uri} />
    </UriContext.Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
