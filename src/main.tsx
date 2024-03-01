import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Home} from './Components/Pages/Home/Home';
import {Series} from './Components/Pages/Series/Series';
import Login from './Components/Login/Login';
import SignIn from './Components/Login/SignIn';
import SoloFilm from './Components/SoloFilm/SoloFilm'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { persistor, store } from './Redux/store'
import { Provider } from 'react-redux'
import "./index.css";
import { PersistGate } from 'redux-persist/integration/react'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
    {
    path: '/series',
    element: <Series/>
  },
    {
    path: '/films',
    element: <Home/>
  },
    {
    path: '/recent',
    element: <Home/>
  },
    {
    path: '/sign_in',
    element: <SignIn/>
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: '/solo',
    element: <SoloFilm/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
