import React, { createContext } from 'react'
import {render} from 'react-dom'



document.addEventListener('DOMContentLoaded', () => {
  render( <h1>Main site</h1>,
    document.body.appendChild(document.createElement('div')),
  )
})
