// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import './assets/style/application.scss'

const render = () => {
  // NB: We have to re-require MyApp every time or else this won't work
  // We also need to wrap our app in the AppContainer class
  ReactDOM.render(<Home />, document.getElementById('root'))
}

render()
if (module.hot) module.hot.accept(render)
