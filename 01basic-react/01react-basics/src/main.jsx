import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const username = "Muhammad akif naveed "

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com',
    target : '_blank'
  },
  username,
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  reactElement
)
