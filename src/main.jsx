import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import "./app.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bag from "./routes/Bag.jsx"
import Home from './routes/Home.jsx'
import { Provider } from 'react-redux'
import myntraStore from './store/index.js'
import "bootstrap/dist/css/bootstrap.min.css"


// Setting up router
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/bag", element: <Bag/>}
   ] }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={myntraStore}> 
      {/* This is Provider that provides store data to children */}
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
