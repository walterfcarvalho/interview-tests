import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import { createBrowserHistory } from "history"

import App from './components/App'
import SimpleList from './components/SimpleList'
import GrowShrinkButton from './components/GrowShrinkButton'
import BuggyButtons from './components/Bunnys'
import StackOperation from './components/StackOperation'
import Captcha from './components/Captcha'
import Formulario from './components/Formulario'
import RenderRobots from './components/RenderRobots'
import CssAnimation from './components/CssAnimation'
import LoginScreen from './components/loginScreen'
import MergeSortPart1 from './components/MergeSortPart1'

const root = ReactDOM.createRoot(document.getElementById('root'))
const history = createBrowserHistory({ window })


root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Routes>

        <Route path="/" element={<App />} >
          <Route index element={<App />} />
        </Route>

        <Route path="/simplelist" element={<SimpleList />} > </Route>
        
        <Route path="/growshrinkbutton" element={<GrowShrinkButton />} > </Route>
        
        <Route path="/BuggyButtons" element={<BuggyButtons />} > </Route>

        <Route path="/stackoperation" element={<StackOperation />} > </Route>
      
        <Route path="/captcha" element={<Captcha />} > </Route>
     
        <Route path="/formulario" element={<Formulario />} > </Route>
        
        <Route path="/renderrobot" element={<RenderRobots />} > </Route>
        
        <Route path="/cssanimation" element={<CssAnimation />} > </Route>
        
        <Route path="/loginscreen" element={<LoginScreen />} > </Route>
        
        <Route path="/mergesortpart1" element={<MergeSortPart1 />} > </Route>

        <Route path="/timeline" element={<App />} >
          <Route path=":login" element={<App />} />
        </Route>

      </Routes>
    </HistoryRouter>
  </React.StrictMode>
)
